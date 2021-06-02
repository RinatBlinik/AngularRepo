import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/joke.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly baseUrl: string = 'http://localhost:3000';
  types$!: Promise<string[]>;
  constructor(private http: HttpClient) {
    const url = `${this.baseUrl}/jokes`;
    this.types$ = this.http
      .get<Joke[]>(url)
      .pipe(map(jokes => jokes.filter((joke, i, arr) => arr.findIndex(j => j.type === joke.type) === i)
        .map(joke => joke.type))).toPromise();
  }

  getJoke(keyword: string, index: number): Promise<Joke> {
    const url = `${this.baseUrl}/jokes?q=${keyword}&_start=${index}&_limit=1`;

    return this.http
      .get<Joke[]>(url)
      .pipe(map(r => r[0]))
      .toPromise();
  }

  getJokeByType(keyword: string, index: number, type: string): Promise<Joke> {
    const url = `${this.baseUrl}/jokes?type=${type}&q=${keyword}&_start=${index}&_limit=1`;

    return this.http
      .get<Joke[]>(url)
      .pipe(map(r => r[0]))
      .toPromise();
  }
  async getTypes(): Promise<string[]> {
    return this.types$;
    /* const url = `${this.baseUrl}/jokes`;
    return this.http
      .get<Joke[]>(url)
      .pipe(map(jokes => jokes.filter((joke, i, arr) => arr.findIndex(j => j.type === joke.type) === i)
        .map(joke => joke.type))).toPromise(); */
  }
  getJokesCountByType(keyword: string, type: string): Promise<number> {
    const url = `${this.baseUrl}/jokes?type=${type}&q=${keyword}`;

    return this.http
      .get<Joke[]>(url)
      .pipe(map(r => r.length))
      .toPromise();
  }
  getJokesCount(keyword: string,): Promise<number> {
    const url = `${this.baseUrl}/jokes?q=${keyword}`;

    return this.http
      .get<Joke[]>(url)
      .pipe(map(r => r.length))
      .toPromise();
  }
}
