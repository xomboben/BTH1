import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bai3="Bài 3"
  name = [{hoten:'Nguyen Van Anh',dthi:9.5},
  {hoten:'Tran Thi Mai',dthi:10.5},
  {hoten:'Hoan Anh Dung',dthi:5.5}
]
  Sapxep(){
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
     this.name.sort((a,b)=> {
    if(catten(a.hoten)>catten(b.hoten)) return 1;
    else if(catten(a.hoten)<catten(b.hoten)) return -1;
    return 0;
  });
  }
}
