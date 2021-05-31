import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { historyItem } from 'src/app/model/types';
import { QuizService } from 'src/app/services/quiz.service';



@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.css']
})
export class QuizHistoryComponent implements OnInit {
  questionsAndAnswers$! : Observable<historyItem[]>
  
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.questionsAndAnswers$ = this.quizService.getHistory();
  }

  _getClass(item: historyItem): string {
    if (item[3])
      return "green";
    else
      return "red";

  }
}
