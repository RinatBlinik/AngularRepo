import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Rgb } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
private red=0;
private green=0;
private blue=0;
private computerRgb: Rgb = [0,0,0];
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
     this.red=value;
     this.red$.next(this.red);
 }

 setGreen(value: number){
     this.green=value;
    this.green$.next(this.green);
}

setBlue(value: number){
    this.blue=value;
    this.blue$.next(this.blue);
}

getComputerColor(): Observable<Rgb> {
    return this.computerColor$.asObservable();
}

randomizeColor(){
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    this.computerRgb = [r,g,b];
    this.computerColor$.next(this.computerRgb);
}

}
