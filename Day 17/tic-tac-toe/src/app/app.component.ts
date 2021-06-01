import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { boardValue, GameStatus } from './models/types';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';
  player$!: Observable<boardValue>;
  isGameOver$!: Observable<boolean>;
  isDraw$!:Observable<boolean>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.player$ = this.gameService.getPlayer();
    this.isDraw$ = this.gameService.getGameStatus().pipe(map(s => s === GameStatus.Draw));
    this.isGameOver$ = this.gameService.isGameOver();

  }

}
