import { Component } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent {
  players: Player[] = [
    new Player("Osvaldo Alonso", "6 Midfielder", 31, "5' 11", 155, 1),
    new Player("Clint Dempsey", "2 Forward ", 34, "6' 1", 170, 2),
    new Player("Brad Evans", "3 Defender/Midfielder", 32, "6' 1", 170, 3)
  ];
}
