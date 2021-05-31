import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // data
  question$!: Observable<Question>;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.question$ = this.quizService.getCurrentQuestion();
  }

  updateAnswer(index: number) {

    this.quizService.setAnswer(index);

  }
}
