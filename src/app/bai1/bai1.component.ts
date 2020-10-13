import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }
  bai1 = 'Bài 1';
  x:any;
  n:any;
  kq:any;
  ngOnInit(): void {
  }
  Tinh(){
    for (let i=1;i<=this.n;++i){
      this.kq=Number.parseInt(this.x)+Number.parseInt(Math.pow(this.x,i).toString());
    }
  }

}
