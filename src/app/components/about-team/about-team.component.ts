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
  team = [
    {
      initials: 'JP',
      name: 'Joshua Plischek',
      role: 'Entwicklung & Design',
      tags: ['Frontend', 'UI/UX', 'Angular'],
      bio: 'Baut Websites, seit er 15 ist. Heute macht er das hauptberuflich – mit dem Anspruch, dass sich jeder Handwerker im Netz so gut präsentiert, wie seine Arbeit es verdient.',
      fact: 'Baut nachts Webapps, tagsüber Ideen.'
    },
    {
      initials: 'SG',
      name: 'Simeon Gießbrecht',
      role: 'Akquise & Marketing',
      tags: ['SEO', 'Branding', 'Sales'],
      bio: 'Wenn Simeon einen Handwerksbetrieb sieht, der online unsichtbar ist, juckt es ihm in den Fingern. Er sorgt dafür, dass die richtigen Kunden euch finden.',
      fact: 'Verwandelt Handwerker in digitale Marken.'
    }
  ];
}
