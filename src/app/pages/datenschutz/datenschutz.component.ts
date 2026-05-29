import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [RouterLink, NavigationComponent, FooterComponent],
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss']
})
export class DatenschutzComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  constructor() {
    this.title.setTitle('Datenschutz – JS Digitalwerk');
    this.meta.updateTag({ name: 'description', content: 'Datenschutzerklärung von JS Digitalwerk gemäß DSGVO.' });
    this.meta.updateTag({ property: 'og:title', content: 'Datenschutz – JS Digitalwerk' });
    this.meta.updateTag({ property: 'og:url', content: 'https://jsdigitalwerk.de/datenschutz' });
    const canonical = this.doc.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://jsdigitalwerk.de/datenschutz');
  }
}
