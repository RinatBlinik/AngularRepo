import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardItem } from 'src/app/models/boardItem';
import { boardValue } from 'src/app/models/types';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  currentPlayer$!:Observable<boardValue>;
  boardItem$! : Observable<BoardItem >;
  @Input()
  id:number=0;

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.currentPlayer$= this.gameService.getPlayer();
    this.boardItem$ = this.gameService.getBoardItem(this.id);
  }
  onItemClick(){
    console.log("item ${id} clicked")
    this.gameService.setBoardItem(this.id.toString())
  }

}
