import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TictactoeComponent} from "./components/tictactoe/tictactoe.component";
import {MainComponent} from "./components/main/main.component";
import {ForOneComponent} from "./components/for-one/for-one.component";
import {ForTwoComponent} from "./components/for-two/for-two.component";
import {SquarejumpComponent} from "./components/squarejump/squarejump.component";

const routes: Routes = [
  {path: 'tictac' ,component:TictactoeComponent},
  {path: 'forTwo' ,component: ForTwoComponent},
  {path:'forOne' ,component: ForOneComponent},
  {path: 'squarejump',component: SquarejumpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
