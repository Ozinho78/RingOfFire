import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(){}

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
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
      console.log(this.currentCard);
      this.pickCardAnimation = true;

      setTimeout(() => {      // nach 1,5 Sekunden wird die Animation wieder zurückgesetzt
        this.pickCardAnimation = false;
      }, 1500)
    }
  }
}
