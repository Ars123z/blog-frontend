import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { SeparatorComponent } from '../../common/separator/separator.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterLink } from '@angular/router';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SeparatorComponent, RouterLink],
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.css'
})
export class WorkListComponent implements OnInit{

ngOnInit(): void {
  const blogContainers = document.querySelectorAll('.works');
  
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
