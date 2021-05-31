import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
private computerRgb = [0,0,0];
private red$ = new BehaviorSubject(0);
private green$ = new BehaviorSubject(0);
private blue$ = new BehaviorSubject(0);
private computerColor$ =  new BehaviorSubject(this.computerRgb);

  constructor() { }

getRed(): Observable<number> {
   return this.red$.asObservable();
}

getGreen(): Observable<number> {
    return this.green$.asObservable();
 }

 getBlue(): Observable<number> {
    return this.blue$.asObservable();
 }

 setRed(value: number){
     this.red$.next(value);
 }

 setGreen(value: number){
    this.green$.next(value);
}

setBlue(value: number){
    this.blue$.next(value);
}

getComputerColor(): Observable<number[]> {
    return this.computerColor$.asObservable();
}

randomizeColor(){
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    this.computerColor$.next([r,g,b]);
}

}
