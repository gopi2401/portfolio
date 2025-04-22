import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
 skills = [
  { name: 'Node.js', icon: '/stack/5968322.png' },
  { name: 'React.js', icon: '/stack/React-icon.svg.png' },
  { name: 'Tailwind CSS', icon: '/stack/tailwind.webp' },
  { name: 'Express.js', icon: '/stack/express-1.png' },
  { name: 'PostgreSQL', icon: '/stack/postgresql.png' },
  { name: 'MongoDB', icon: '/stack/mongodb.svg' },
  { name: 'Amazon Web Services', icon: '/stack/aws.png' },
  { name: 'Flutter', icon: '/stack/flutter.png' },
  ];
}
