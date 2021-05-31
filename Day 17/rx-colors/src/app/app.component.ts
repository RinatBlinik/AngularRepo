import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { combineLatest, Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
    computerRgb$! : Observable<string>;
    userRgb$! : Observable<string>;
    isSuccess$! : Observable<boolean> ;

    constructor (private gameService: GameService){

    }

    ngOnInit(): void {
        this.computerRgb$ = this.gameService.getComputerColor().pipe(map(rgb => this.toRgbString(rgb[0],rgb[1],rgb[2])));
        this.userRgb$ = combineLatest(this.gameService.getRed(),
                                      this.gameService.getGreen(),
                                      this.gameService.getBlue()).pipe(map(rgb => this.toRgbString(rgb[0],rgb[1],rgb[2])));
        this.isSuccess$ =   combineLatest(this.computerRgb$, this.userRgb$).pipe(map(pair => pair[0] === pair[1]));                         
    }

    randomizeColor() {
        this.gameService.randomizeColor();
    }
    private toRgbString(r: number,g: number,b: number): string {
         return 'rgb(' + r + ',' + g + ',' + b + ')';        
    }
}
