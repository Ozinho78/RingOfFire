import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  // constructor(private router: Router){}

  // newGame(){
  //   this.router.navigateByUrl('/game');
  // }
}
