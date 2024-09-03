import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from "../common/footer/footer.component";
import { SeparatorComponent } from '../common/separator/separator.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterLink } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SeparatorComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private auth: AuthService) {}
  http = inject(HttpClient)


  fetchData() {
    const token = localStorage.getItem("access"); // Replace with your actual token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get("http://127.0.0.1:8000/accounts/get-something/", {headers}).subscribe(resp => console.log(resp))
  }

 
 signOut() {
 this.auth.googleLogOut()
 }
 ngOnInit() {
  gsap.from('.text-center', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.3 // Stagger the animation for each line or word
  });
  const svgElement = document.querySelector('.svg-element');

  gsap.to(svgElement, {
    scrollTrigger: {
      trigger: svgElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const rotation = self.direction === 1 ? self.progress * 360 : -self.progress * 360;
        gsap.to(svgElement, { rotation: rotation, overwrite: 'auto' });
      }
    }
  });

  gsap.from('.secondary-line', {
    scrollTrigger: {
      trigger: '.secondary-container',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.3 // Stagger the animation for each line or word
  });

  const containers = document.querySelectorAll('.fade-in');

  containers.forEach(container => {
    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out'
    });
  });

  const blogContainers = document.querySelectorAll('.blog-container');
  blogContainers.forEach(container => {
    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
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




