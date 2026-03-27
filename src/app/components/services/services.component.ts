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
      description: 'Eine Website, auf die ihr stolz seid. Responsive, schnell, und so gebaut, dass Kunden euch anrufen statt weiterzuscrollen.'
    },
    {
      badge: 'Individuelle Webapps',
      icon: '⚙',
      title: 'Individuelle Webapps',
      description: 'Terminbuchung, die eure Kunden selbst hinkriegen. Angebotserstellung per Klick statt per Zettel. Tools, die euren Alltag leichter machen.'
    },
    {
      badge: 'Logo & Branding',
      icon: '✦',
      title: 'Logo & Branding',
      description: 'Vom Logo über die Visitenkarte bis zum Firmenwagen – ein Auftritt, der sagt: Hier arbeiten Profis.'
    }
  ];
}
