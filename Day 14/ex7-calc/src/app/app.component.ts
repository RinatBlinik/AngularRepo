import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  a: number = 0;
  b: number = 0;
  resultAdd: number = 0;
  resultSub: number = 0;
  resultMult: number = 0;
  isBusy: boolean = false;
  show: boolean=false;
  emptyA: boolean = true;
  emptyB: boolean = true;
  // methods
  setA(value: string) {
      this.show= false;
      this.a = Number(value) ;
      if (value!=""){
        this.emptyA=false;
      }
      else{
        this.emptyA=true;
      }
  }
  setB(value: string) {
    this.show= false;
    this.b = Number(value) ;
    if (value!=""){
        this.emptyB=false;
    }
    else{
        this.emptyB=true;
      }
}
calculate() {
    if(this.emptyA || this.emptyB){
        this.show=false;
    }
    else{
            this.show=true;
    }
    this.resultAdd =this.a+this.b;
    this.resultSub = this.a-this.b;
    this.resultMult = this.a*this.b;
}
        // this.results = [
        //     this.a + "+" + this.b + "=" + (this.a+this.b), 
        //     this.a + "-" + this.b + "=" + (this.a-this.b), 
        //     this.a + "*" + this.b + "=" + (this.a*this.b)
        // ];


}
