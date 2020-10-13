import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.css']
})
export class Bai8Component implements OnInit {

  constructor() { }
  bai8="Bài 8";
   a:number ;
   b:number;
   c:number;
   h:number;
   kq:any;
  ngOnInit(): void {
    this.kq=0;
    var hc=new HC(this.a,this.b,this.c,this.h);
    this.kq +=hc.Thetich();
     //console.log(hc.Thetich())
  }
}
export class Hinhchop{
    protected a:number;
    protected b:number;
    protected c:number;
    constructor(a:number,b:number,c:number){
      this.a=a;
      this.b=b;
      this.c=c;
    }
    public Dientich():number{
      var p = (this.a+this.b+this.c)/2;
      var d= Math.sqrt(p*(p-this.c)*(p-this.a)*(p-this.b));
      return d;
    }
  }
  export class HC extends Hinhchop{
    protected h:number;
    constructor(a:number,b:number,c:number,h:number){
      super(a,b,c);
      this.h=h;
    }
    public Thetich():number{
      return 1/3*this.Dientich()*this.h;
    }
  }
