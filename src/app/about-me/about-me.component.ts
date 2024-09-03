import { Component } from '@angular/core';
import { SeparatorComponent } from '../common/separator/separator.component';
import { FooterComponent } from '../common/footer/footer.component';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SeparatorComponent, FooterComponent, HeaderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
pageHeading = "About Me"
}
