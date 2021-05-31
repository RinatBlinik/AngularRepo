import { Component, OnInit } from '@angular/core';
import { Question } from './model/question';
import { QuizQuestions } from './model/quiz-questions';
import { historyItem } from 'src/app/model/types';
import { Observable } from 'rxjs';
import { QuizService } from './services/quiz.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // data
  title = 'pop-quiz';
  isDone$!:Observable<boolean>;
  
  constructor(private quizService:QuizService) { }
  ngOnInit(): void {
    this.isDone$ = this.quizService.isQuizOver();
  }
 
}
