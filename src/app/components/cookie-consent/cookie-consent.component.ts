import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieConsentService } from '../../shared/services/cookie-consent.service';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent {
  consent = inject(CookieConsentService);
}
