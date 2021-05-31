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
    colorRgb: string | null = 'rgb(0,0,0)';
    
  
    constructor(private gameService: GameService) {

     }

  ngOnInit(): void {
  }

}
