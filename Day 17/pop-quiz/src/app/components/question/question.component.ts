import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // data
  @Input()
  question: Question = {
    caption: 'what', 
    answers: [
        'Pink', 
        'Orange', 
        'Green', 
        'White'
    ], 
    correctAnswer: 1,
    userAnswer: 0
};
@Output()
  selection = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  updateAnswer(index: number){
    this.question.userAnswer=index;
    this.selection.emit(index);
  }


}
