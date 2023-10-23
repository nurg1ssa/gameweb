import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-squarejump',
  templateUrl: './squarejump.component.html',
  styleUrls: ['./squarejump.component.scss']
})
export class SquarejumpComponent implements OnInit {
  end: boolean = false;
  score: number = 0;
  num: number = 1000;

  // Define the initial speed and an increment value.
  initialSpeed: number = 1000;
  speedIncrement: number = 20;

  constructor(private renderer: Renderer2) {}

  @ViewChild('character', { static: true }) character!: ElementRef;
  @ViewChild('block', { static: true }) block!: ElementRef;

  ngOnInit() {
    this.checkDead();
  }

  newGame() {
    this.score = 0;
    this.end = true;

    // Increase the speed at the start of a new game.
    this.num = this.initialSpeed;
    this.renderer.setStyle(this.block.nativeElement, 'animation-duration', this.num + 'ms');
  }

  checkDead() {
    if (this.block.nativeElement.offsetLeft < 450 && this.block.nativeElement.offsetLeft > 0) {
      this.num -= 1;
      this.score = 1000 - this.num;
      this.end = true;
      this.renderer.setStyle(this.block.nativeElement, 'animation-duration', this.num + 'ms');
    } else {
      this.end = false;
    }
  }
}
