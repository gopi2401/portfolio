import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item: any

   para = document.getElementById("para");
   btnText = document.getElementById("toggleBtnText");
   expanded = false;

   toggleParagraph() {
    this.expanded = !this.expanded;
    this.para?.classList.toggle("line-clamp-3");
    if (this.btnText) {
      this.btnText.textContent = this.expanded ? "View Less" : "View More";
    }
  }
}
