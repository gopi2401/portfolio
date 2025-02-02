import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
