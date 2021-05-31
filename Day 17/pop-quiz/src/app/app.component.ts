import { Component } from '@angular/core';
import { Question } from './model/question';
import { QuizQuestions } from './model/quiz-questions';
import {historyItem } from './components/quiz-history/quiz-history.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // data
  title = 'pop-quiz';
  currentIndex = 0;
  questions :Question[]=QuizQuestions.questions;
  score: number = 0;
  history: historyItem[]=[];
  isDone: boolean = false;
  // methods
 selectAnswer(index: number){
   let question = this.questions[this.currentIndex];
   question.userAnswer = index;
   this.history.push([question.caption, question.userAnswer,question.answers[index], question.correctAnswer === index]);
   this.currentIndex++;
   if(this.currentIndex === this.questions.length){
     this.isDone = true;
     this.score = this._calculateScore();
   }
  }

    private _calculateScore(): number {
      let counter =0;
      for (let question of this.questions) {
      if(question.userAnswer === question.correctAnswer ){
        counter++;
      }
      }
     return counter/this.questions.length * 100;
   }

 
}
