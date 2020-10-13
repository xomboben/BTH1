import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bai5="Bài 5";
  a:string;
  mang:any;
  ChinhPhuong(){
    this.mang=this.a.split(',');
    this.mang=this.mang.filter(x=>Math.pow(Math.floor(Math.sqrt(x)),2)==x);
    }
  }

