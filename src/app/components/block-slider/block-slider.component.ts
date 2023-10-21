import { Component, OnInit } from '@angular/core';
import {ElementRef , ViewChild, AfterViewInit } from "@angular/core";
import { Renderer2} from '@angular/core';

@Component({
  selector: 'app-block-slider',
  templateUrl: './block-slider.component.html',
  styleUrls: ['./block-slider.component.scss']
})
export class BlockSliderComponent implements OnInit, AfterViewInit {
  num: number = 1;
  end: boolean =false;
  var: number=400;
  started: boolean = false
  constructor(private renderer: Renderer2) {
  }

  @ViewChild('game')
  game!: ElementRef;


  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  startGame(){
    for (var i = 25; i > 0; i--) {
      const slider: HTMLDivElement = this.renderer.createElement('div');
      slider.setAttribute("class", "slider animate");
      slider.setAttribute("id", "slider" + i);
      this.renderer.appendChild(this.game.nativeElement, slider);
    }
    this.started = true
  }


  check(slider: number) {
    var sliderCurrent = document.getElementById("slider" + slider);
    var sliderAbove = document.getElementById("slider" + (slider + 1));
    if (slider == 1) {
      var sliderBelow = sliderCurrent;
    } else {
      var sliderBelow = document.getElementById("slider" + (slider - 1));
    }
    if (sliderCurrent !=null && sliderAbove !=null && sliderBelow !=null) {
      var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
      sliderCurrent.classList.remove("animate");
      sliderCurrent.style.left = left;
      var width = window.getComputedStyle(sliderCurrent).getPropertyValue("width");
        var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
        var difference = parseInt(left) - leftBelow;
        var absDifference = Math.abs(difference);
        var num = parseInt(left);
        if(difference>parseInt(width)||difference<parseInt(width)*-1){
          var score = "Score: "+ (slider-1);
          alert(score);
          location.reload();
          this.started = false
        }
        if (difference > 0) {
          num = num + absDifference;
        } else {
          num = num - difference;
          sliderCurrent.style.left = num +"px";
        }
        var offset = (parseInt(width) - absDifference).toString().concat("px");
        sliderCurrent.style.width = offset;
        sliderAbove.style.width = offset;
        sliderAbove.style.visibility = "visible";
        this.var = this.var +absDifference;
        document.documentElement.style.setProperty('--width', this.var + 'px');
      }
      this.num = this.num + 1;
    }

}

