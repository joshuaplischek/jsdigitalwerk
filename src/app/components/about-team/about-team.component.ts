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
      bio: 'Entwickler und Designer aus Leidenschaft. Bringt Handwerksbetriebe mit modernster Technologie ins Netz.',
      fact: 'Baut nachts Webapps, tagsüber Ideen.'
    },
    {
      initials: 'SG',
      name: 'Simeon Gießbrecht',
      role: 'Akquise & Marketing',
      tags: ['SEO', 'Branding', 'Sales'],
      bio: 'Stratege und Netzwerker. Findet für jeden Betrieb die passende digitale Stimme und bringt sie ans Licht.',
      fact: 'Verwandelt Handwerker in digitale Marken.'
    }
  ];
}
