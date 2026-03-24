import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './stats-counter.component.html',
  styleUrls: ['./stats-counter.component.scss']
})
export class StatsCounterComponent implements OnInit {
  stats = [
    { prefix: '', value: 10, suffix: '+', label: 'Projekte umgesetzt' },
    { prefix: '', value: 100, suffix: '%', label: 'Kundenzufriedenheit' },
    { prefix: '', value: 20, suffix: '%', label: 'Effizienzsteigerung' },
    { prefix: '', value: 24, suffix: '/7', label: 'Support & Erreichbarkeit' }
  ];

  displayValues: string[] = [];

  ngOnInit() {
    this.displayValues = this.stats.map(s => s.prefix + '0' + s.suffix);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    setTimeout(() => {
      const el = document.querySelector('.stats-section');
      if (el) observer.observe(el);
    }, 100);
  }

  animateCounters() {
    this.stats.forEach((stat, i) => {
      let start = 0;
      const duration = 2000;
      const step = (stat.value / duration) * 16;
      const interval = setInterval(() => {
        start = Math.min(start + step, stat.value);
        this.displayValues[i] = stat.prefix + Math.round(start) + stat.suffix;
        if (start >= stat.value) clearInterval(interval);
      }, 16);
    });
  }
}
