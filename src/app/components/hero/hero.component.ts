import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { ParticleCanvasComponent } from './particle-canvas.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollAnimateDirective, ParticleCanvasComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
