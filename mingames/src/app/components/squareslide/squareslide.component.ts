import {Component, HostListener, OnInit} from '@angular/core';
import {ElementRef, ViewChild , AfterViewInit} from "@angular/core";

@Component({
  selector: 'app-squareslide',
  templateUrl: './squareslide.component.html',
  styleUrls: ['./squareslide.component.scss']
})

export class SquareslideComponent implements OnInit {
  constructor() {
  }
  count: number=0;
  loc: number = 100;
  num: number = 2000;
  @ViewChild('character') character!: ElementRef;
  @ViewChild('block') block!: ElementRef;

  ngOnInit() {
    setInterval(()=>{
      if(this.character.nativeElement.offsetLeft == this.block.nativeElement.offsetLeft &&
        this.block.nativeElement.offsetTop<500 && this.block.nativeElement.offsetTop>420){
        this.block.nativeElement.style.setProperty('animation', 'none');
      }
    },1)
  }
  newGame() {
    this.count = 0;
    
  }
  moveLeft() {
    if (this.loc > 0) {
      this.loc -= 100;
      this.character.nativeElement.style.setProperty('left', this.loc + 'px');
    }
  }

  moveRight() {
    if (this.loc < 200) {
      this.loc += 100;
      this.character.nativeElement.style.setProperty('left', this.loc + 'px');
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.moveLeft();
    } else if (event.key === "ArrowRight") {
      this.moveRight();
    }
  }

  @HostListener('animationiteration', ['$event'])
  blockMove(event: AnimationEvent) {
    this.block.nativeElement.style.setProperty('left', Math.floor(Math.random() * 3) * 100 + 'px');
    this.count +=1;
  }
}


