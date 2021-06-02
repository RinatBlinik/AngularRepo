import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, from, Observable } from 'rxjs';
import { map, switchMap, merge } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {

  joke$!: Observable<Joke>;
  jokesCount$!:Promise<number>;
  hasNext$!: Observable<boolean>;
  hasPrev$!: Observable<boolean>;

  index!: number;
  index$!: Observable<[index:number,keyword:string,type:string]>;
  keyword!: string;
  type!: string;

  resetPunchline$!: Observable<boolean>;
  hidePunchline$!: BehaviorSubject<boolean>;
  punchlineHidden$!: Observable<boolean>;
  hidePunchline: boolean = true;

  constructor(
    private data: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.index = Number(this.route.snapshot.params['index']);
    this.keyword = this.route.snapshot.params['keyword'];
    this.type = this.route.snapshot.params['type'];
    this.index$ = this.route.params.pipe(map(prms => [Number(prms['index']),prms['keyword'],prms['type']]));
    if (this.type !== undefined) {
      this.joke$ = this.index$.pipe(switchMap(prms=> from(this.data.getJokeByType(prms[1], prms[0], prms[2]))));
      this.jokesCount$ = this.data.getJokesCountByType(this.keyword,this.type);
    }
    else {
      this.joke$ = this.index$.pipe(switchMap(prms => from(this.data.getJoke(prms[1], prms[0]))));
      this.jokesCount$ = this.data.getJokesCount(this.keyword);
    }

    this.hasNext$ = combineLatest(from(this.jokesCount$), this.index$)
                                  .pipe(map(res => res[1][0] < res[0] -1));
    this.hasPrev$ = this.index$.pipe(map(prms => prms[0] > 0));

    this.resetPunchline$ = this.index$.pipe(map(i => this.restPunchline()));
    this.hidePunchline$ = new BehaviorSubject<boolean>(true);
    this.punchlineHidden$ = this.resetPunchline$.pipe(merge(this.hidePunchline$)); 
  }

  goNext() {
    this.index = Number(this.route.snapshot.params['index']);
    if (this.type !== undefined) {
      this.router.navigate(['jokes', this.type, this.keyword, this.index + 1]);
    }
    else {
      this.router.navigate(['jokes', this.keyword, this.index + 1]);
    }

  }

  goPrev() {
    this.index = Number(this.route.snapshot.params['index']); if (this.type !== undefined) {
      this.router.navigate(['jokes', this.type, this.keyword, this.index - 1]);
    }
    else {
      this.router.navigate(['jokes', this.keyword, this.index - 1]);
    }
  }
restPunchline(): boolean{
  this.hidePunchline=true;
return true;
}
   togglePunchline() {
    this.hidePunchline = !this.hidePunchline;
    this.hidePunchline$.next(this.hidePunchline);
  }

}
