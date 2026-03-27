import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {
  currentIndex = signal(0);

  projects = [
    {
      title: 'Brandschutz Schräder',
      tags: ['Webdesign', 'Lokales SEO'],
      description: 'Neuer Webauftritt für ein Familienunternehmen mit über 45 Jahren Erfahrung im Brandschutz. Klare Struktur, modernes Design und Fokus auf lokale Sichtbarkeit.',
      result: 'Erste Anfragen nach einer Woche – ohne Werbung.',
      url: 'https://brandschutzschraeder.de/',
      domain: 'brandschutzschraeder.de',
      initial: 'B',
      color: '#DC2626'
    },
    {
      title: 'Schönenbach Steinteppich',
      tags: ['Webdesign', 'Conversion-Optimierung'],
      description: 'Komplette Website-Überarbeitung für einen Steinteppich-Fachbetrieb. Fokus auf qualifizierte Kundenanfragen – mit klarer Nutzerführung und optimiertem Kontaktformular.',
      result: 'Deutlich bessere Anfragen, mehr Aufträge über Online-Kontakt.',
      url: 'https://www.schoenenbach-steinteppich.de/',
      domain: 'schoenenbach-steinteppich.de',
      initial: 'S',
      color: '#4338CA'
    },
    {
      title: 'Febrix Projekt',
      tags: ['Webdesign', 'Branding'],
      description: 'Website für einen frisch gegründeten CAD-Dienstleister. Professioneller Auftritt ab Tag eins, der Kompetenz ausstrahlt und erste Kunden überzeugt.',
      result: 'Starker erster Eindruck trotz Neugründung.',
      url: 'https://febrix-projekt.de/',
      domain: 'febrix-projekt.de',
      initial: 'F',
      color: '#0D9488'
    }
  ];

  get current() {
    return this.projects[this.currentIndex()];
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.projects.length) % this.projects.length);
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.projects.length);
  }
}
