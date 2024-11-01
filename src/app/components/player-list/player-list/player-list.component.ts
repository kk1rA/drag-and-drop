import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDragStart } from '@angular/cdk/drag-drop';
import { RED_TEAM } from '../../../core/constants/red-team';
import { Player } from '../../../core/types/player.typs';
import { PlayerCardComponent } from "../player-card/player-card.component";
import { DraggingService } from '../../../core/services/dragging.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  standalone: true,
  imports: [
    PlayerCardComponent,
    CdkDropList,
    CdkDrag,
  ],
})
export class PlayerListComponent {
  @ViewChild("redTeamList", {static: false}) redTeamList: ElementRef | undefined;
  
  players: Player[] = RED_TEAM;

  constructor(
    private readonly dragSerice: DraggingService,
  ){}

  playerStartDragging(event: CdkDragStart) {
    this.dragSerice.setDraggeblePlayer(event.source.element);
  }
}
