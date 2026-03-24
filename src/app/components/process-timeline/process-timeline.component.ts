import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './process-timeline.component.html',
  styleUrls: ['./process-timeline.component.scss']
})
export class ProcessTimelineComponent {
  steps = [
    { number: '01', title: 'Erstgespräch', description: 'Wir lernen euer Handwerk kennen und verstehen, was ihr braucht.' },
    { number: '02', title: 'Konzept & Design', description: 'Wireframes und Designentwürfe, abgestimmt auf eure Wünsche.' },
    { number: '03', title: 'Entwicklung', description: 'Sauberer Code, moderne Technologie, schnelle Umsetzung.' },
    { number: '04', title: 'Launch & Support', description: 'Go-Live und laufende Betreuung – wir lassen euch nicht allein.' }
  ];
}
