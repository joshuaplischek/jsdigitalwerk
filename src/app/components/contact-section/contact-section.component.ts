import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollAnimateDirective],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  submitted = false;
  sending = signal(false);
  error = signal('');

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      telefon: [''],
      message: ['', Validators.required]
    });
  }

  isInvalid(field: string): boolean {
    const c = this.contactForm.get(field);
    return !!(c && c.invalid && c.touched);
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.sending.set(true);
    this.error.set('');

    this.http.post<{ success: boolean }>('/contact.php', this.contactForm.value).subscribe({
      next: () => {
        this.sending.set(false);
        this.submitted = true;
      },
      error: () => {
        this.sending.set(false);
        this.error.set('Beim Senden ist ein Fehler aufgetreten. Bitte versucht es erneut oder schreibt uns direkt eine E-Mail.');
      }
    });
  }
}
