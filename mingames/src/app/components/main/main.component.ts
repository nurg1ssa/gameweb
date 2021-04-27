import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  tictac(){
    this.router.navigate(['/tictac']);
  }
  forOne(){
    this.router.navigate(['forOne']);
  }
  forTwo(){
    this.router.navigate(['forTwo']);
  }
}
