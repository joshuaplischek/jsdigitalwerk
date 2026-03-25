import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
  Input
} from '@angular/core';

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
}

@Component({
  selector: 'app-particle-canvas',
  standalone: true,
  template: `<canvas #canvas></canvas>`,
  styles: [`
    :host { display: block; position: absolute; inset: 0; }
    canvas { width: 100%; height: 100%; display: block; }
  `]
})
export class ParticleCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() bgColor = '#FFFFFF';
  @Input() particleColor = 'rgba(67, 56, 202, 0.25)';
  @Input() lineColor = 'rgba(67, 56, 202,';
  @Input() lineColorHover = 'rgba(13, 148, 136,';
  @Input() lineOpacityMultiplier = 0.3;
  @Input() lineOpacityMultiplierHover = 0.5;
  @Input() mouseRadius = 200;
  @Input() particleDensity = 9000;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse = { x: null as number | null, y: null as number | null };
  private animationFrameId = 0;
  private resizeObserver?: ResizeObserver;
  private dpr = 1;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.setupCanvas();
    this.initParticles();
    this.animate();

    this.resizeObserver = new ResizeObserver(() => {
      this.setupCanvas();
      this.initParticles();
    });
    this.resizeObserver.observe(canvas.parentElement!);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.resizeObserver?.disconnect();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  @HostListener('window:mouseout')
  onMouseOut(): void {
    this.mouse.x = null;
    this.mouse.y = null;
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement!;
    this.dpr = window.devicePixelRatio || 1;

    canvas.width = parent.clientWidth * this.dpr;
    canvas.height = parent.clientHeight * this.dpr;
    canvas.style.width = parent.clientWidth + 'px';
    canvas.style.height = parent.clientHeight + 'px';
    this.ctx.scale(this.dpr, this.dpr);
  }

  private initParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.width / this.dpr;
    const h = canvas.height / this.dpr;
    this.particles = [];

    const isMobile = window.innerWidth < 768;
    const density = isMobile ? 15000 : this.particleDensity;
    const count = Math.floor((w * h) / density);

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2 + 1;
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        directionX: (Math.random() * 0.4) - 0.2,
        directionY: (Math.random() * 0.4) - 0.2,
        size,
        color: this.particleColor
      });
    }
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;
    const w = canvas.width / this.dpr;
    const h = canvas.height / this.dpr;

    ctx.fillStyle = this.bgColor;
    ctx.fillRect(0, 0, w, h);

    for (const p of this.particles) {
      if (p.x > w || p.x < 0) p.directionX = -p.directionX;
      if (p.y > h || p.y < 0) p.directionY = -p.directionY;

      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouseRadius + p.size && dist > 0) {
          const force = (this.mouseRadius - dist) / this.mouseRadius;
          p.x -= (dx / dist) * force * 5;
          p.y -= (dy / dist) * force * 5;
        }
      }

      p.x += p.directionX;
      p.y += p.directionY;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    this.drawConnections(w, h);
  };

  private drawConnections(w: number, h: number): void {
    const ctx = this.ctx;
    const maxDist = (w / 7) * (h / 7);

    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a + 1; b < this.particles.length; b++) {
        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDist) {
          const opacity = 1 - (distSq / 20000);
          let strokeColor = this.lineColor;
          let opacityMult = this.lineOpacityMultiplier;

          if (this.mouse.x !== null && this.mouse.y !== null) {
            const mx = this.particles[a].x - this.mouse.x;
            const my = this.particles[a].y - this.mouse.y;
            if (Math.sqrt(mx * mx + my * my) < this.mouseRadius) {
              strokeColor = this.lineColorHover;
              opacityMult = this.lineOpacityMultiplierHover;
            }
          }

          ctx.strokeStyle = `${strokeColor} ${opacity * opacityMult})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particles[a].x, this.particles[a].y);
          ctx.lineTo(this.particles[b].x, this.particles[b].y);
          ctx.stroke();
        }
      }
    }
  }
}
