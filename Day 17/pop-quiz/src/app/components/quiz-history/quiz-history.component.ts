import { Component, Input, OnInit } from '@angular/core';

export type historyItem = [question: string,userAnswer: number,textAnswer: string, isCorrect: boolean];

@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.css']
})
export class QuizHistoryComponent implements OnInit {

  @Input()
  questionsAndAnswers: historyItem[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  _getClass(item :historyItem): string {
    if(item[3])
    return "green";
    else
    return "red";

  }
}
