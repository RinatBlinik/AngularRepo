import { Component, OnInit } from '@angular/core';
import { StyleService } from './core/services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
 
  constructor() {   
  }
  ngOnInit(): void {
    
  }

}
