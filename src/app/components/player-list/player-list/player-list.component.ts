import { Component } from '@angular/core';
import { RED_TEAM } from '../../../core/constants/red-team';
import { Player } from '../../../core/types/player.typs';
import { PlayerCardComponent } from "../player-card/player-card.component";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  standalone: true,
  imports: [PlayerCardComponent],
})
export class PlayerListComponent {
  players: Player[] = RED_TEAM;
}
