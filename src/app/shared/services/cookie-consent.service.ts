import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private readonly STORAGE_KEY = 'cookie_consent';
  private platformId = inject(PLATFORM_ID);

  showBanner = signal(
    isPlatformBrowser(this.platformId) ? !localStorage.getItem(this.STORAGE_KEY) : false
  );

  acceptAll(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, 'all');
    }
    this.showBanner.set(false);
  }

  acceptNecessary(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, 'necessary');
    }
    this.showBanner.set(false);
  }

  hasAnalyticsConsent(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return localStorage.getItem(this.STORAGE_KEY) === 'all';
  }
}
