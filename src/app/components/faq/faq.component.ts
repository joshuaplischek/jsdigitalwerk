import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  openIndex = signal<number | null>(null);

  faqs = [
    {
      question: 'Was kostet eine Website?',
      answer: 'Jedes Projekt ist individuell. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot – keine versteckten Kosten.'
    },
    {
      question: 'Wie lange dauert ein Projekt?',
      answer: 'Eine Standard-Website ist in 2-4 Wochen fertig. Komplexere Webapps können 4-8 Wochen dauern.'
    },
    {
      question: 'Brauche ich technisches Wissen?',
      answer: 'Nein. Wir übernehmen alles Technische. Ihr müsst nur wissen, was ihr euren Kunden erzählen wollt.'
    },
    {
      question: 'Bietet ihr auch laufende Betreuung an?',
      answer: 'Ja. Wir bieten Wartungspakete an, damit eure Website immer aktuell, sicher und schnell bleibt.'
    },
    {
      question: 'Was unterscheidet euch von anderen Agenturen?',
      answer: 'Wir sind selbst Handwerker – nur digital. Keine Vorlagen von der Stange, sondern maßgeschneiderte Lösungen mit modernster Technologie.'
    }
  ];

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
