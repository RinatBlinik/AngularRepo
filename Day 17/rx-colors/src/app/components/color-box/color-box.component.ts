import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {

    @Input()
    title: string = 'color-box';

    @Input()
    private _colorRgb: string = 'rgb(100,0,0)';
    
    public get colorRgb(): string {
        return this._colorRgb;
    }
    public set colorRgb(value: string) {
        this._colorRgb = value;
    }
  
    constructor(private gameService: GameService) {

     }

  ngOnInit(): void {
  }

}
