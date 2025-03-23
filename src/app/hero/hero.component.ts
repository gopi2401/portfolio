import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';

gsap.registerPlugin(RoughEase);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  width = 300;
  height = 250;

  banner = document.querySelector("#banner");
  baseStar = document.querySelector(".star");

  frag = document.createDocumentFragment();

  appearMin = 0.3;
  appearMax = 0.8;

  delayMin = 2;
  delayMax = 6;

  durationMin = 0.3;
  durationMax = 1;

  numAnimations = 50;
  numStars = 300;

  stars: any[] = [];
  eases: any[] = [];

  ngOnInit() {
    this.generateEases();
    this.generateStars();
    this.cleanupAndAppend();
  }

  generateEases() {
    for (let i = 0; i < this.numAnimations; i++) {
      const ease = new (RoughEase as any)({
        template: gsap.parseEase("linear"),
        strength: this.random(1, 3),
        points: Math.floor(this.random(50, 200)),
        taper: "both",
        randomize: true,
        clamp: true
      });
      this.eases.push(ease);
    }
  }

  generateStars() {
    for (let i = 0; i < this.numStars; i++) {
      const star = this.createStar();
      if (star) this.stars.push(star);
    }
  }

  createStar() {
    const star = this.baseStar?.cloneNode(true);
    if (!star) return null;

    this.frag.appendChild(star);

    gsap.set(star, {
      rotation: this.random(360),
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      x: this.random(this.width),
      y: this.random(this.height),
    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    for (let i = 0; i < this.numAnimations; i++) {
      const ease1 = this.eases[Math.floor(this.random(this.numAnimations))];
      const ease2 = this.eases[Math.floor(this.random(this.numAnimations))];

      const alpha = this.random(0.7, 1);
      const scale = this.random(0.15, 0.4);

      const appear = `+=${this.random(this.appearMin, this.appearMax)}`;
      const delay = `+=${this.random(this.delayMin, this.delayMax)}`;
      const duration1 = this.random(this.durationMin, this.durationMax);
      const duration2 = this.random(this.durationMin, this.durationMax);

      tl.to(star, { duration: duration1, autoAlpha: alpha, scale: scale, ease: ease1 }, delay)
        .to(star, { duration: duration2, autoAlpha: 0, scale: 0, ease: ease2 }, appear);
    }

    tl.progress(this.random(1));

    return { element: star, timeline: tl };
  }

  cleanupAndAppend() {
    if (this.baseStar && this.banner) {
      document.body.removeChild(this.baseStar);
      this.banner.appendChild(this.frag);
    }
  }

  random(min: number, max?: number): number {
    if (max == null) { max = min; min = 0; }
    if (min > max) [min, max] = [max, min];
    return min + (max - min) * Math.random();
  }
}