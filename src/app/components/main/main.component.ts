import { Component, OnInit, ViewChild } from '@angular/core';
import  { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentRoute!: string; 
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update the currentRoute variable with the current route
        this.currentRoute = event.url;
      }
    });
   } 
   
  ngOnInit(): void {
  }
  tictac(){
    this.router.navigate(['/tictac']);
  }
}
