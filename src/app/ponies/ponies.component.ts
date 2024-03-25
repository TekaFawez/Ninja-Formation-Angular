import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PonyModel } from '../pony.model';

@Component({
  selector: 'ns-ponies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  ponies: Array<PonyModel> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
  refreshPonies(): void {
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }, { name: 'test' }];
    }
}
