import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ns-menu',
  standalone: true,
  imports: [CommonModule      ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  navbarCollapsed: boolean = true;
  toggleNavbar(){
    this.navbarCollapsed=false;
    console.log("test btn");
    

  }
}
