import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './mock-players';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string){
    return this.database.object('players/' + playerId);
  }

  updatePlayer(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name,
                                position: localUpdatedPlayer.position,
                                age: localUpdatedPlayer.age,
                                height: localUpdatedPlayer.height,
                                weight: localUpdatedPlayer.weight,
                                experience: localUpdatedPlayer.experience});
    }

  deletePlayer(localPlayerToDelete){
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

}
