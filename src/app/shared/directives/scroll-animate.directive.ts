import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationDelay = '0ms';
  @Input() animationDirection: 'up' | 'left' | 'right' = 'up';

  constructor(private el: ElementRef) {}

  private get initialTransform(): string {
    if (this.animationDirection === 'left') return 'translateX(-40px)';
    if (this.animationDirection === 'right') return 'translateX(40px)';
    return 'translateY(24px)';
  }

  ngOnInit() {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transform = this.initialTransform;
    element.style.transition = `opacity 0.6s ease ${this.animationDelay}, transform 0.6s ease ${this.animationDelay}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
  }
}
