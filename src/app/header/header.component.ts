import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isLightThemeActive: boolean = true;

  // constructor(private themeService: ThemeService) { }

  // public toggleTheme(): void {
  //   this.isLightThemeActive = !this.isLightThemeActive;
  //   if (this.isLightThemeActive) {
  //     this.themeService.setTheme(Theme.Light);
  //   } else {
  //     this.themeService.setTheme(Theme.Dark);
  //   }
  // }
}
