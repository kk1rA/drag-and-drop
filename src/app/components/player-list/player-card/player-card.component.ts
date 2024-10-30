import { Component, Input } from '@angular/core';
import { Player } from '../../../core/types/player.typs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  standalone: true,
  imports: [],
})
export class PlayerCardComponent {
  @Input() player!: Player;
}
