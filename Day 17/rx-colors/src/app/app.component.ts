import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
    private computer$!: Observable<number[]>;
    computerRgb$! : Observable<string>;


    constructor (private gameService: GameService){

    }

    ngOnInit(): void {
        this.computer$ = this.gameService.getComputerColor();
        this.computerRgb$ = this.computer$.pipe(map(rgb => this.toRgbString(rgb[0],rgb[1],rgb[2])));
    }

    randomizeColor() {
        this.gameService.randomizeColor();
        this.computer$ = this.gameService.getComputerColor();
    }
    private toRgbString(r: number,g: number,b: number): string {
         return 'rgb(' + r + ',' + g + ',' + b + ')';        
    }
}
