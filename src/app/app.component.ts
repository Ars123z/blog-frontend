import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  @ViewChild('mainDiv') mainDiv!: ElementRef;
  resetPosition() {
    this.mainDiv.nativeElement.scrollTop = 0;
  }
}
