import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-referenzen',
  standalone: true,
  imports: [NavigationComponent, FooterComponent, ScrollAnimateDirective],
  templateUrl: './referenzen.component.html',
  styleUrls: ['./referenzen.component.scss']
})
export class ReferenzenComponent {
  projects = [
    {
      title: 'GP Brandschutz',
      tags: ['Webdesign', 'Lokales SEO'],
      description: 'GP Brandschutz verfügte zuvor über keinerlei digitale Präsenz. Wir haben das Unternehmen von Grund auf in die digitale Welt geführt – mit einem professionellen Webauftritt, der Vertrauen schafft und lokal sichtbar macht.',
      result: 'Erstmals online präsent – professionell und gefunden.',
      url: 'https://gp-brandschutz.de',
      domain: 'gp-brandschutz.de',
      screenshot: 'assets/img/references/gp-3.png',
      initial: 'G',
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
}
