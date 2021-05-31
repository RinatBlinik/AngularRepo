import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../model/question';
import { map } from 'rxjs/operators'
import { historyItem } from '../model/types';
import { QuizQuestions } from '../model/quiz-questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  currentIndex = 0;
  currentIndex$ = new BehaviorSubject(this.currentIndex);
  quiz: Question[] = QuizQuestions.questions

  constructor() { }

  private moveToNextQuestion() {
    this.currentIndex++;
    this.currentIndex$.next(this.currentIndex);
  }
  private _createHistoryItem(question: Question): historyItem {
    return [question.caption, question.userAnswer, question.answers[question.userAnswer], question.correctAnswer === question.userAnswer];
  }
  private _createHistory(idx: number): historyItem[] {
    return this.quiz.filter((q, index) => index < idx).map(q => this._createHistoryItem(q));
  }
  private  _calculateScore(): number {
    let counter = 0;
    for (let question of this.quiz) {
      if (question.userAnswer === question.correctAnswer) {
        counter++;
      }
    }
    return counter / this.quiz.length * 100;
  }
  getCurrentQuestion(): Observable<Question> {
    return this.currentIndex$.pipe(map(i => this.quiz[i]));
  }
  getHistory(): Observable<historyItem[]> {
    return this.currentIndex$.pipe(map(i => this._createHistory(i)));
  }
  setAnswer(answer: number) {
    this.quiz[this.currentIndex].userAnswer = answer;
    this.moveToNextQuestion();
  }

  isQuizOver(): Observable<boolean> {
    return this.currentIndex$.pipe(map(i => i >= this.quiz.length));
  }
  getScore(): Observable<number> {
    return this.currentIndex$.pipe(map(i => this._calculateScore()));
  }
}
