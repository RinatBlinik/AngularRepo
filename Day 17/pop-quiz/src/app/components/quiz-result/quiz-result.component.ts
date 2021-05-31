import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  // data 
  score$! :Observable<number>

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.score$ = this.quizService.getScore();
  }

}
