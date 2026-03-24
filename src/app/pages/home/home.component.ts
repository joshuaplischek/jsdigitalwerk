import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProcessTimelineComponent } from '../../components/process-timeline/process-timeline.component';
import { StatsCounterComponent } from '../../components/stats-counter/stats-counter.component';
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { AboutTeamComponent } from '../../components/about-team/about-team.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    ServicesComponent,
    ProcessTimelineComponent,
    StatsCounterComponent,
    PortfolioSectionComponent,
    TestimonialsComponent,
    AboutTeamComponent,
    FaqComponent,
    ContactSectionComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  template: `
    <app-navigation />
    <main>
      <app-hero />
      <app-services />
      <app-process-timeline />
      <app-stats-counter />
      <app-portfolio-section />
      <app-testimonials />
      <app-about-team />
      <app-faq />
      <app-contact-section />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `
})
export class HomeComponent {}
