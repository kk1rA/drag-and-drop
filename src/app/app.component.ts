import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerListComponent } from "./components/player-list/player-list/player-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayerListComponent,
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'cp-fantasy';
}
