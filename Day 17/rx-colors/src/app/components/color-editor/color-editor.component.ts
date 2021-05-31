import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.css']
})
export class ColorEditorComponent implements OnInit {
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  private toValidValue(num: string): number {
    let val = Math.round(Number(num));
    return Math.min(Math.max(0, val), 255);
}
setR(value: string){
    this.gameService.setRed(this.toValidValue(value));
}

setG(value: string){
  this.gameService.setGreen(this.toValidValue(value));
}

setB(value: string){
  this.gameService.setBlue(this.toValidValue(value));
}
}
