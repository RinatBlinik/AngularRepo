import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { first, map, switchMap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie!: Movie;
  movie$!: Observable<Movie>;
  movieForm!: FormGroup;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit(): Promise<void> {
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['index']))
    );

    this.movie$ = index$.pipe(
      switchMap(index => this.data.getMovieByIndex(index))
    );
    this.movie = await this.movie$.pipe(first()).toPromise();
    this.movieForm = this.formBuilder.group({
      caption: [this.movie.caption, [Validators.required]],
      description: [this.movie.description, [Validators.required, this.descriptionValidator]],
      poster: [this.movie.poster, [Validators.required, this.urlValidation]]
    })

  }
  descriptionValidator(control: FormControl): ValidationErrors | null {
    const val = (control.value as string).split(" ").length;
    if (val >= 10) {
      return null;
    }
    return {
      'minimumWordsValidation': {
        numberOfWords: val
      }
    }
  }

  urlValidation(control: FormControl): ValidationErrors | null {
    const val = control.value as string;
    if (val.startsWith('http://') || val.startsWith('https://')) {
      return null;
    }
    return {
      'urlValidation': {
        urlShouldStartsWith: 'http:// or https://'
      }
    }
  }

  async save() {
    this.movie = this.movieForm.value;
    let index = Number(this.route.snapshot.params['index']);
    let resp = await this.data.editMovieByIndex(index, this.movie)
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
