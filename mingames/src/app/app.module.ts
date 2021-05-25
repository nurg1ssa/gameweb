import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { SquareComponent } from './components/tictactoe/square/square.component';
import { BoardComponent } from './components/tictactoe/board/board.component';
import { ForOneComponent } from './components/for-one/for-one.component';
import { ForTwoComponent } from './components/for-two/for-two.component';
import { SquarejumpComponent } from './components/squarejump/squarejump.component';
import { SquareslideComponent } from './components/squareslide/squareslide.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TictactoeComponent,
    SquareComponent,
    BoardComponent,
    ForOneComponent,
    ForTwoComponent,
    SquarejumpComponent,
    SquareslideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
