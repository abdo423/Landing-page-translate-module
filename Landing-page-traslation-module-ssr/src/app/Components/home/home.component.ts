import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
