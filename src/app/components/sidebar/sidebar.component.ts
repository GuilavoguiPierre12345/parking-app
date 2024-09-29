import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavIterms } from '../../types/types';
import { navitems } from '../../constants/constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navLinksItems:INavIterms[]=navitems;

}
