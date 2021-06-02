import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  types$!: Promise<string[]>;
  selectedType: string = "";
  //selectTypeControl!: FormControl;

  constructor(private data: HttpService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.types$ = this.data.getTypes();
    //this.selectTypeControl = this.formBuilder.control
  }
  setSelectedType(val: string = '') {
    this.selectedType = val;
  }
  search(keyword: string) {
    this.router.navigate(['jokes', keyword, 0]);
  }
  searchByType(keyword: string, type: string) {
    if (type === '') {
      this.router.navigate(['jokes', keyword, 0]);
    }
    else {
      this.router.navigate(['jokes', type, keyword, 0]);
    }

  }
}
