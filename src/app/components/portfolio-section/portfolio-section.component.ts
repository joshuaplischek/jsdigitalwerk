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
      title: 'Müller Sanitär GmbH',
      description: 'Komplette Neugestaltung der Website mit Terminbuchungssystem und Kundenverwaltung.',
      tags: ['Webdesign', 'Webapp'],
      initial: 'M',
      color: '#4338CA'
    },
    {
      title: 'Elektro Hoffmann',
      description: 'Modernes Branding und responsiver Webauftritt mit Kontaktformular und Google Maps Integration.',
      tags: ['Branding', 'Webdesign'],
      initial: 'E',
      color: '#0D9488'
    },
    {
      title: 'Schreinerei Bauer',
      description: 'Portfolio-Website mit Galerie, Referenzen und interaktiver Konfiguration für Maßmöbel.',
      tags: ['Webdesign', 'Galerie'],
      initial: 'S',
      color: '#7C3AED'
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
