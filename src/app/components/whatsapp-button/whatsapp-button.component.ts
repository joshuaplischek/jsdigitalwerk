import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  template: `
    <a href="https://wa.me/49000000000" target="_blank" class="whatsapp-fab" title="WhatsApp">
      💬
    </a>
  `,
  styles: [`
    .whatsapp-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      z-index: 200;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5);
      }
    }
  `]
})
export class WhatsappButtonComponent {}
