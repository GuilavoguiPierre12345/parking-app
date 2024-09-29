import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FoooterComponent } from "../foooter/foooter.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FoooterComponent, SidebarComponent, RouterOutlet ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
