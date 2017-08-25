import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})

export class PlayersComponent implements OnInit{
  players: Player[];

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(){
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  };
}
