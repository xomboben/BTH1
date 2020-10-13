import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }
  bai2='Bài 2';

  x1:any;
  n1:any;
  kq1:number;

  Tinh1(){
    let v2=1;
    this.kq1=0;
    for (let i=1;i<=Number.parseInt(this.n1);i++){
      v2= v2 * i;
      this.kq1+=Math.pow(-1,i) * Math.pow(Number.parseInt(this.x1),i)/v2;
    }
  }
  ngOnInit(): void {
  }

}
