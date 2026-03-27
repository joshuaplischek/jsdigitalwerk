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
      answer: 'Kommt drauf an, was ihr braucht – aber wir reden immer erst, bevor wir rechnen. Im Erstgespräch klären wir euren Bedarf und ihr bekommt danach ein transparentes Angebot. Keine versteckten Kosten, versprochen.'
    },
    {
      question: 'Wie lange dauert ein Projekt?',
      answer: 'Eine klassische Website steht in 2-4 Wochen. Wenn\'s komplexer wird – zum Beispiel mit Terminbuchung oder Kundenverwaltung – rechnet mit 4-8 Wochen. Wir halten euch auf dem Laufenden.'
    },
    {
      question: 'Brauche ich technisches Wissen?',
      answer: 'Null. Wir kümmern uns um die Technik, ihr kümmert euch ums Handwerk. Ihr müsst uns nur erzählen, was euer Betrieb macht und was eure Kunden wissen sollen – den Rest machen wir.'
    },
    {
      question: 'Bietet ihr auch laufende Betreuung an?',
      answer: 'Klar. Websites brauchen Pflege – Updates, Sicherheit, kleine Änderungen. Wir bieten Wartungspakete an, damit ihr euch um nichts kümmern müsst.'
    },
    {
      question: 'Was unterscheidet euch von anderen Agenturen?',
      answer: 'Wir arbeiten ausschließlich mit Handwerksbetrieben. Dadurch verstehen wir eure Sprache, eure Kunden und eure Abläufe. Und: Ihr redet immer direkt mit uns – keine Callcenter, keine Ticket-Systeme.'
    }
  ];

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
