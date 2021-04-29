import { Component, OnInit } from '@angular/core';
import {ElementRef , ViewChild,AfterViewInit} from "@angular/core";

@Component({
  selector: 'app-squarejump',
  templateUrl: './squarejump.component.html',
  styleUrls: ['./squarejump.component.scss']
})
export class SquarejumpComponent implements OnInit{
  click!: boolean;
  i!: number;
  end!: boolean;
  score: number=0;
  constructor() {
  }
  ngOnInit(){
    this.onGame();
  }
  @ViewChild('character')
  character!: ElementRef;
  @ViewChild('block')
  block!: ElementRef;
  jump() {
    if (this.click == false) {
      this.click = !this.click;
    }
    setTimeout(() => {
      this.click = !this.click;
    }, 500)
  }
  onGame(){

  }
  checkDead(){

    if (this.block.nativeElement.offsetLeft<35 && this.block.nativeElement.offsetLeft>0 &&
    this.character.nativeElement.offsetTop>=130){
      this.score= this.score+1;

      return this.score
    }
      return this.score;
  }
}


