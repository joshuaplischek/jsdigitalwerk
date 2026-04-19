import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about-team',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent {
  management = {
    photo: 'assets/img/profile/Simeon Gießbrecht.jpeg',
    initials: 'SG',
    name: 'Simeon Gießbrecht',
    role: 'Kundenservice & Ads',
    tags: ['SEO', 'Branding', 'Ads'],
    bio: 'Wenn Simeon einen Handwerksbetrieb sieht, der online unsichtbar ist, juckt es ihm in den Fingern. Er sorgt dafür, dass die richtigen Kunden euch finden.',
    fact: 'Verwandelt Handwerker in digitale Marken.'
  };

  devTeam = [
    {
      photo: 'assets/img/profile/Joshua Plischek.png',
      initials: 'JP',
      name: 'Joshua Plischek',
      role: 'Entwicklung & Design',
      tags: ['Frontend', 'UI/UX', 'Angular'],
      bio: 'Baut Websites, seit er 15 ist. Heute macht er das hauptberuflich – mit dem Anspruch, dass sich jeder Handwerker im Netz so gut präsentiert, wie seine Arbeit es verdient.',
      fact: 'Baut nachts Webapps, tagsüber Ideen.'
    },
    {
      photo: 'assets/img/profile/Andre Kröker.jpg',
      initials: 'AK',
      name: 'André Kröker',
      role: 'Entwicklung & Design',
      tags: ['Frontend', 'UI/UX', 'Angular'],
      bio: 'Denkt in Komponenten, baut in Code. Mit André wächst das Team um eine weitere Stimme, die Handwerksbetrieben zu einem starken Auftritt im Netz verhilft.',
      fact: 'Löst Bugs, bevor sie entstehen.'
    }
  ];
}
