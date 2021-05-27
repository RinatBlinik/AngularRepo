import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  // data 
  @Input()
  score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
