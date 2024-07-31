import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-subscribe-section',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './subscribe-section.component.html',
  styleUrl: './subscribe-section.component.css'
})
export class SubscribeSectionComponent {

}
