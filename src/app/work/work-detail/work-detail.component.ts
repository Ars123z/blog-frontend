import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { SeparatorComponent } from '../../common/separator/separator.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SeparatorComponent],
  templateUrl: './work-detail.component.html',
  styleUrl: './work-detail.component.css'
})
export class WorkDetailComponent  implements OnInit {

ngOnInit(): void {
  const blogContainers = document.querySelectorAll('.image-container');
  
  blogContainers.forEach(container => {
    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top 60%',
        end: 'bottom 60%',
        toggleActions: 'play none none none',
            // Optional: Adds markers to visualize the start and end points
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out'
    });
  });
}
}
