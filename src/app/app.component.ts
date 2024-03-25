import { Component } from '@angular/core';
import { PoniesComponent } from './ponies/ponies.component';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [PoniesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';
}
