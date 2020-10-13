import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bai4="Bài 4";
name=[{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9},
 {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},
 { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}];

 Loc(){
  this.name = this.name.filter(x=>x.diemthi>8 && x.quequan=="Hai Phong" );
 }
}
