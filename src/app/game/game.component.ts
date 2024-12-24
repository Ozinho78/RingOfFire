import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, DialogAddPlayerComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(public dialog: MatDialog){}

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    // console.log(this.game);    // show template of created object
  }
  //   Game{players: Array(0), stack: Array(0), playedCard: Array(0), currentPlayer: 0}currentPlayer: 0playedCard: []players: []stack: [][[Prototype]]: Object
  // {
  //   "players": [],
  //   "stack": [],
  //   "playedCard": [],
  //   "currentPlayer": 0
  // }


  takeCard(){
    if(!this.pickCardAnimation){    // man kann draufklicken, wenn Animation wieder auf false zurückgesetzt wurde
      this.currentCard = this.game.stack.pop(); // remove the last element from the stack, pick last card from array
      // console.log(this.currentCard);
      this.pickCardAnimation = true;
      // console.log('New card: ' + this.currentCard); // print the card that was picked
      // console.log('Game is: ', this.game);    // outlog game object
      
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;   // cycle through players array
      setTimeout(() => {      // nach 1,5 Sekunden wird die Animation wieder zurückgesetzt
        this.game.playedCard.push(this.currentCard);  // push currentCard into stack of played cards; pushed within timeout in order to not show the played card before the animation of the picked card finishes
        this.pickCardAnimation = false;
      }, 1000)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      // console.log('The dialog was closed', name);
      if(name && name.length > 0){        // wenn name existiert und nicht leer ist
        this.game.players.push(name);
      }
    });
  }

}
