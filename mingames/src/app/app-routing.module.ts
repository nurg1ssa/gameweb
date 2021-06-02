import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TictactoeComponent} from "./components/tictactoe/tictactoe.component";
import {MainComponent} from "./components/main/main.component";
import {SquarejumpComponent} from "./components/squarejump/squarejump.component";
import {SquareslideComponent} from "./components/squareslide/squareslide.component";
import {BlockSliderComponent} from "./components/block-slider/block-slider.component";

const routes: Routes = [
  {path: 'tictac' ,component:TictactoeComponent},
  {path: 'squareCatch',component: SquarejumpComponent},
  {path:'squareSlide', component: SquareslideComponent},
  {path:'towerBuilder', component: BlockSliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
