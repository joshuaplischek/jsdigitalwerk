import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      badge: 'Webdesign & Landingpages',
      icon: '🖥',
      title: 'Webdesign & Landingpages',
      description: 'Individuelle, responsive Websites, die auf jedem Gerät perfekt aussehen und Kunden überzeugen.'
    },
    {
      badge: 'Individuelle Webapps',
      icon: '⚙',
      title: 'Individuelle Webapps',
      description: 'Maßgeschneiderte Anwendungen – Terminbuchung, Angebotserstellung, Kundenverwaltung.'
    },
    {
      badge: 'Logo & Branding',
      icon: '✦',
      title: 'Logo & Branding',
      description: 'Ein einheitliches Erscheinungsbild, das im Kopf bleibt – vom Logo bis zur Visitenkarte.'
    }
  ];
}
