import { Component, OnInit } from '@angular/core';
import {delay} from "rxjs/operators";
@Component({
  selector: 'app-squarejump',
  templateUrl: './squarejump.component.html',
  styleUrls: ['./squarejump.component.scss']
})
export class SquarejumpComponent implements OnInit {
  click!: boolean;
  i!: number;

  constructor() {
  }

  ngOnInit(): void {
  }
  jump() {
    if (this.click == false){
      this.click = !this.click;
    }
      setTimeout(()=>{
        this.click =!this.click;
      },500)
  }
}

