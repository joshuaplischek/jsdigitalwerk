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
    { number: '01', title: 'Erstgespräch', description: 'Wir hören zu. Was macht euren Betrieb aus? Was nervt euch gerade online? Daraus machen wir einen Plan.' },
    { number: '02', title: 'Konzept & Design', description: 'Ihr seht erste Entwürfe und sagt, was gefällt und was nicht. Kein Fachchinesisch – wir reden Klartext.' },
    { number: '03', title: 'Entwicklung', description: 'Wir bauen. Ihr könnt zugucken – oder einfach weiterarbeiten. Wir melden uns, wenn\'s was zu sehen gibt.' },
    { number: '04', title: 'Launch & Support', description: 'Eure neue Website geht live. Und danach? Sind wir weiterhin da – Updates, Fragen, Wünsche.' }
  ];
}
