import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterLink, NavigationComponent, FooterComponent],
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  constructor() {
    this.title.setTitle('Impressum – JS Digitalwerk');
    this.meta.updateTag({ name: 'description', content: 'Rechtliche Angaben und Kontaktdaten von JS Digitalwerk, Digitalagentur für Handwerksbetriebe.' });
    this.meta.updateTag({ property: 'og:title', content: 'Impressum – JS Digitalwerk' });
    this.meta.updateTag({ property: 'og:url', content: 'https://jsdigitalwerk.de/impressum' });
    const canonical = this.doc.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://jsdigitalwerk.de/impressum');
  }
}
