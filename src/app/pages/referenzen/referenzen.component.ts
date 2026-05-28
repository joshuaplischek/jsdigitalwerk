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
      screenshot: 'assets/img/references/schoenenbach-steinteppich.png',
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
      screenshot: 'assets/img/references/febrix-projekt.png',
      initial: 'F',
      color: '#0D9488'
    },
    {
      title: 'MsolNext',
      tags: ['Webdesign', 'Branding'],
      description: 'Moderner Webauftritt für ein IT-Dienstleistungsunternehmen. Klare Struktur, professionelle Außenwirkung und ein Design, das Kompetenz auf den ersten Blick vermittelt.',
      result: 'Professionelle digitale Visitenkarte für ein wachsendes IT-Unternehmen.',
      url: 'https://msolnext.de/',
      domain: 'msolnext.de',
      screenshot: 'assets/img/references/msolnext.png',
      initial: 'M',
      color: '#6366F1'
    },
    {
      title: 'CNC Opti',
      tags: ['Webdesign', 'Lokales SEO'],
      description: 'Website für einen CNC-Fachbetrieb mit Fokus auf präzise Leistungskommunikation. Technische Kompetenz wird verständlich und überzeugend präsentiert.',
      result: 'Mehr qualifizierte Anfragen aus der Region.',
      url: 'https://www.cncopti.de/',
      domain: 'cncopti.de',
      screenshot: 'assets/img/references/cnc-opti.png',
      initial: 'C',
      color: '#F59E0B'
    },
    {
      title: 'Brandschutz Schräder',
      tags: ['Webdesign', 'Lokales SEO'],
      description: 'Webauftritt für einen Brandschutz-Fachbetrieb. Vertrauen und Zuverlässigkeit stehen im Mittelpunkt – mit klarer Darstellung der Leistungen und einfacher Kontaktmöglichkeit.',
      result: 'Neue Kundenanfragen über die Website, lokale Sichtbarkeit deutlich verbessert.',
      url: 'https://brandschutzschraeder.de/',
      domain: 'brandschutzschraeder.de',
      screenshot: 'assets/img/references/brandschutz-schraeder.png',
      initial: 'B',
      color: '#B45309'
    },
    {
      title: 'Versichert Wissen',
      tags: ['Webdesign', 'Content'],
      description: 'Informationsplattform rund um das Thema Versicherungen. Komplexe Inhalte werden verständlich aufbereitet – übersichtlich, vertrauenswürdig und nutzerzentriert gestaltet.',
      result: 'Klarer Informationsauftritt, der Vertrauen schafft und Besucher zu Kunden macht.',
      url: 'https://versichert-wissen.de/',
      domain: 'versichert-wissen.de',
      screenshot: 'assets/img/references/versichert-wissen.png',
      initial: 'V',
      color: '#0EA5E9'
    },
    {
      title: 'PlantTech',
      tags: ['Webdesign', 'Branding'],
      description: 'Professioneller Webauftritt für ein Schweizer Unternehmen im Bereich Pflanzentechnologie. Internationales Design, das Qualität und Innovationskraft widerspiegelt.',
      result: 'Überzeugender Markenauftritt für den deutschsprachigen und internationalen Markt.',
      url: 'https://planttech.ch/',
      domain: 'planttech.ch',
      screenshot: 'assets/img/references/planttech.png',
      initial: 'P',
      color: '#22C55E'
    },
    {
      title: 'Wellzone Hamm/Sieg',
      tags: ['Webdesign', 'Conversion-Optimierung'],
      description: 'Website für ein Wellness- und Fitnessstudio in Hamm/Sieg. Atmosphärisches Design, das Wohlbefinden ausstrahlt – und Interessenten direkt zur Mitgliedschaft führt.',
      result: 'Mehr Online-Anmeldungen und stärkere lokale Sichtbarkeit.',
      url: 'https://www.wellzone-hammsieg.de/',
      domain: 'wellzone-hammsieg.de',
      screenshot: 'assets/img/references/wellzone-hammsieg.png',
      initial: 'W',
      color: '#EC4899'
    },
    {
      title: 'Vitalzone Hamm/Sieg',
      tags: ['Webdesign', 'Lokales SEO'],
      description: 'Webauftritt für ein Fitnessstudio in Hamm/Sieg. Motivierendes Design, das Energie vermittelt und neue Mitglieder anspricht – direkt aus der Region.',
      result: 'Deutlich mehr Anfragen und Mitgliedschaften über die Website.',
      url: 'https://www.vitalzone-hammsieg.de/',
      domain: 'vitalzone-hammsieg.de',
      screenshot: 'assets/img/references/vitalzone-hammsieg.png',
      initial: 'V',
      color: '#8B5CF6'
    },
    {
      title: 'Vitalzone Hillesheim',
      tags: ['Webdesign', 'Lokales SEO'],
      description: 'Lokaler Fitnessauftritt für den Standort Hillesheim. Konsistentes Branding innerhalb der Vitalzone-Familie, angepasst an die regionale Zielgruppe.',
      result: 'Starke lokale Präsenz und mehr Neukunden aus dem Einzugsgebiet.',
      url: 'https://www.vitalzone-hillesheim.de/',
      domain: 'vitalzone-hillesheim.de',
      screenshot: 'assets/img/references/vitalzone-hillesheim.png',
      initial: 'V',
      color: '#7C3AED'
    },
    {
      title: 'Vitalzone Studios',
      tags: ['Webdesign', 'Branding'],
      description: 'Übergreifende Markenpräsenz für die gesamte Vitalzone-Studiokette. Ein einheitlicher Webauftritt, der alle Standorte unter einem starken Markendach vereint.',
      result: 'Professionelle Kettenpräsenz mit klarer Markenidentität.',
      url: 'https://vitalzone-studios.de/',
      domain: 'vitalzone-studios.de',
      screenshot: 'assets/img/references/vitalzone-studios.png',
      initial: 'V',
      color: '#0891B2'
    }
  ];
}
