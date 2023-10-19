import { Component, OnInit } from '@angular/core';
import {ElementRef , ViewChild, AfterViewInit } from "@angular/core";
@Component({
  selector: 'app-squarejump',
  templateUrl: './squarejump.component.html',
  styleUrls: ['./squarejump.component.scss']
})
export class SquarejumpComponent implements OnInit{
  click!: boolean;
  i!: number;
  end: boolean=false;
  score: number=0;
  num: number=1000;
  constructor() {
  }
  ngOnInit(){
    this.checkDead();
  }
  @ViewChild('character')
  character!: ElementRef;
  @ViewChild('block')
  block!: ElementRef;
  @ViewChild('animation')
  animation!: ElementRef;
  onGame(){

  }
  newGame(){
    this.score = 0;
    this.end =true;
    this.num = 1000;
    this.block.nativeElement.style.setProperty('animation-duration',this.num + 'ms');
  }
  checkDead(){
    if (this.block.nativeElement.offsetLeft<450 && this.block.nativeElement.offsetLeft>0){
      this.num -= 1;
      this.score = 1000 - this.num;
      this.end = true;
      this.block.nativeElement.style.setProperty('animation-duration', this.num + 'ms')
    }
    else {
      this.end = false;
    }
  }
}


