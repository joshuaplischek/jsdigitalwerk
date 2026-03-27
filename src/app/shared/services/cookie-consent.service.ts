import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private readonly STORAGE_KEY = 'cookie_consent';

  showBanner = signal(!localStorage.getItem(this.STORAGE_KEY));

  acceptAll(): void {
    localStorage.setItem(this.STORAGE_KEY, 'all');
    this.showBanner.set(false);
  }

  acceptNecessary(): void {
    localStorage.setItem(this.STORAGE_KEY, 'necessary');
    this.showBanner.set(false);
  }

  hasAnalyticsConsent(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) === 'all';
  }
}
