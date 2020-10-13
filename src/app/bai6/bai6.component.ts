import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bai6="Bài 6";
  a:string;
  mang:any;
  kq:any;
Tinh(){
  this.mang=this.a.split(',');
  this.kq=0;
    for(let i=0;i<this.mang.length;i++){
      if(this.mang[i]>0){
        this.kq+= Number.parseInt(this.mang[i]);
      }
    }
}
}
