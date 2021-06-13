import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today = Date.now();
  
  counters$!: Promise<[number, number, number]>;

  icons = ['auto_awesome_motion', 'inventory', 'hourglass_top'];
  subjects = ['Lists', 'Todo items', 'Active items']
  doneLoading:boolean=false;
  constructor(private dataService: DataService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.counters$ =  this.dataService.getAllCounters();
     await this.counters$;
     this.doneLoading=true;
    } catch (error) {
      this.doneLoading=true;
    }
     
  }

  goToCreateList() {
    this.router.navigate(['lists', '-1', 'edit']);
  }
}
