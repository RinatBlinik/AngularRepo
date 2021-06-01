import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoardItem } from '../models/boardItem';
import { map } from 'rxjs/operators'
import { boardValue, gameStatus, GameStatus } from '../models/types';



@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit {

  private gameBoared!: BoardItem[];
  private gameBoared$ = new BehaviorSubject(this.gameBoared);
  private player: boardValue = "x";

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 9; index++) {
      let bi: BoardItem = { id: index, value: "", isAvailable: true };
      this.gameBoared.push(bi);
    }
  }

  private _setBoardItem(id: number): boolean {
    if (!this.gameBoared[id].isAvailable)
      return false;
    this.gameBoared[id].id = id;
    this.gameBoared[id].value = this.player;
    this.gameBoared[id].isAvailable = false;
    return true;
  }
  
  private _setNextPlayer() {
    if (this.player === "x")
      this.player = "O";
    else
      this.player = "x";
  }
  private _checkBoard(): GameStatus {

    //Winning Condition For First Row 
    if (this.gameBoared[1].value !== "" && this.gameBoared[1].value == this.gameBoared[2].value && this.gameBoared[2].value == this.gameBoared[3].value) {
      return GameStatus.Win;
    }
    //Winning Condition For Second Row 
    else if (this.gameBoared[4].value !== "" && this.gameBoared[4].value == this.gameBoared[5].value && this.gameBoared[5].value == this.gameBoared[6].value) {
      return GameStatus.Win;
    }
    //Winning Condition For Third Row 
    else if (this.gameBoared[7].value !== "" && this.gameBoared[7].value == this.gameBoared[8].value && this.gameBoared[8].value == this.gameBoared[9].value) {
      return GameStatus.Win;
    }
    //Winning Condition For First Column     
    else if (this.gameBoared[1].value !== "" && this.gameBoared[1].value == this.gameBoared[4].value && this.gameBoared[4].value == this.gameBoared[7].value) {
      return GameStatus.Win;
    }
    //Winning Condition For Second Column
    else if (this.gameBoared[2].value !== "" && this.gameBoared[2].value == this.gameBoared[5].value && this.gameBoared[5].value == this.gameBoared[8].value) {
      return GameStatus.Win;
    }
    //Winning Condition For Third Column
    else if (this.gameBoared[3].value !== "" && this.gameBoared[3].value == this.gameBoared[6].value && this.gameBoared[6].value == this.gameBoared[9].value) {
      return GameStatus.Win;
    }
    else if (this.gameBoared[1].value !== "" && this.gameBoared[1].value == this.gameBoared[5].value && this.gameBoared[5].value == this.gameBoared[9].value) {
      return GameStatus.Win;
    }
    else if (this.gameBoared[3].value !== "" && this.gameBoared[3].value == this.gameBoared[5].value && this.gameBoared[5].value == this.gameBoared[7].value) {
      return GameStatus.Win;
    }
    // If all the cells or values filled with X or O then any player has won the match
    else if (this._isBoardFull()) {
      return GameStatus.Draw;
    }
    else {
      return GameStatus.NotFinished;
    }
  }
  private _isBoardFull(): boolean {
    for (let index = 0; index < this.gameBoared.length; index++) {
      if (this.gameBoared[index].value === "") {
        return false;
      }
    }
    return true;
  }
getPlayer():Observable<boardValue>{
  return this.gameBoared$.pipe(map(gb => this.player));
}
  getBoardItem(id: number): Observable<BoardItem> {
    return this.gameBoared$.pipe(map(gb => gb[id]));
  }
  setBoardItem(id: string) {
    let res = this._setBoardItem(Number(id));
    if (res) {
      this._setNextPlayer();
      this.gameBoared$.next(this.gameBoared);
    }

  }
  getGameStatus(): Observable<GameStatus> {
    return this.gameBoared$.pipe(map(gb => this._checkBoard()));
  }

}


