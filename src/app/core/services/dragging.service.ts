import { ElementRef, Injectable } from '@angular/core';
import { CdkDragDrop, DragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Player } from '../types/player.typs';

@Injectable({ providedIn: 'root' })
export class DraggingService {

  currentDraggeblePlayer!: ElementRef | null;

  constructor(
    private readonly dragDrop: DragDrop,
  ){}

  setDraggeblePlayer(player: ElementRef) {
    this.currentDraggeblePlayer = player;
  }

  playerDropped(event: CdkDragDrop<Player[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      this.clearDragglePlayer();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }

  private clearDragglePlayer(): void {
    this.currentDraggeblePlayer = null;
  }

}