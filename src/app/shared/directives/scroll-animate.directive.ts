import { Directive, ElementRef, OnInit, Input, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationDelay = '0ms';
  @Input() animationDirection: 'up' | 'left' | 'right' = 'up';

  private platformId = inject(PLATFORM_ID);

  constructor(private el: ElementRef) {}

  private get initialTransform(): string {
    if (this.animationDirection === 'left') return 'translateX(-40px)';
    if (this.animationDirection === 'right') return 'translateX(40px)';
    return 'translateY(24px)';
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transform = this.initialTransform;
    element.style.transition = `opacity 0.6s ease ${this.animationDelay}, transform 0.6s ease ${this.animationDelay}`;

    const enterTransition = `opacity 0.6s ease ${this.animationDelay}, transform 0.6s ease ${this.animationDelay}`;
    const exitTransition  = `opacity 0.4s ease 0ms, transform 0.4s ease 0ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.style.transition = enterTransition;
            element.style.opacity = '1';
            element.style.transform = 'none';
          } else {
            element.style.transition = exitTransition;
            element.style.opacity = '0';
            element.style.transform = this.initialTransform;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
  }
}
