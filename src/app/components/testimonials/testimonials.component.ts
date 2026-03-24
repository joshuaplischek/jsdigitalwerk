import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: 'JS Digitalwerk hat unsere Website komplett neu aufgebaut. Seitdem haben wir deutlich mehr Anfragen über die Website. Absolute Empfehlung!',
      name: 'Klaus Müller',
      role: 'Geschäftsführer',
      company: 'Müller Sanitär GmbH',
      initials: 'KM'
    },
    {
      quote: 'Professionelle Arbeit, schnelle Umsetzung und immer erreichbar wenn man Fragen hat. Das neue Logo ist einfach perfekt geworden.',
      name: 'Thomas Hoffmann',
      role: 'Inhaber',
      company: 'Elektro Hoffmann',
      initials: 'TH'
    },
    {
      quote: 'Endlich eine Website, die zu uns passt! Die Jungs haben genau verstanden, was wir brauchen. Die Terminbuchung spart uns täglich Zeit.',
      name: 'Maria Bauer',
      role: 'Geschäftsführerin',
      company: 'Schreinerei Bauer',
      initials: 'MB'
    }
  ];
}
