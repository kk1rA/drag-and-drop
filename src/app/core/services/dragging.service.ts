import { ElementRef, Injectable } from '@angular/core';
import { DragDrop } from '@angular/cdk/drag-drop';

@Injectable({ providedIn: 'root' })
export class DraggingService {

  currentDraggeblePlayer!: ElementRef;

  constructor(
    private readonly dragDrop: DragDrop,
  ){}

  setDraggeblePlayer(player: ElementRef) {
    this.currentDraggeblePlayer = player;
    console.log(player)
  }

}