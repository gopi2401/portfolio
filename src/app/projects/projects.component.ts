import { Component } from '@angular/core';
import { CardComponent } from '../component/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [{
    title: 'BOOKMYPLOTS',
    description: 'BookMyPlots is a real estate platform aimed at enhancing the property buying and selling experience. As a Full Stack Developer, I was responsible for designing and maintaining the server-side logic and database architecture, ensuring seamless integration with front-end applications.',
    tech_stack: 'Solid.js, Astro.js, AWS, Serverless APIs',
    pic_url: 'https://bookmyplots.co/favicon.svg',
    website_url: 'https://bookmyplots.co/',
    github_url: ''
  }, 
  // {
  //   title: 'News Website',
  //   description: 'News aggregation platform using NewsAPI.',
  //   tech_stack: 'https://github.com/gopi2401/news-web',
  //   pic_url: 'https://private-user-images.githubusercontent.com/117622182/375651434-b643d344-3c75-460b-908b-23403f2df46d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzMTQ1MTgsIm5iZiI6MTczODMxNDIxOCwicGF0aCI6Ii8xMTc2MjIxODIvMzc1NjUxNDM0LWI2NDNkMzQ0LTNjNzUtNDYwYi05MDhiLTIzNDAzZjJkZjQ2ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQwOTAzMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZTBjN2EyYmNkMjE5NzNjZjNkMjRiZjFkMGNiYzM1NjVmZTlmZWYzNWQ1NTg3OWZjOGQ1OTc5YTFjOTNjNDU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.C4JsRHt_dcQLrjUyc-mcizEY1nPxL_zO9-Y9k2WjzC4',
  //   website_url: 'https://gopi2401.github.io/news-web',
  //   github_url: 'https://github.com/gopi2401/news-web'
  // },
   {
    title: 'insta',
    description: 'This application allows easy downloading of Instagram posts, reels, stories, YouTube videos, and shorts. It also includes features for viewing and downloading WhatsApp statuses and Instagram profiles.',
    tech_stack: '',
    pic_url: 'https://gopi2401.github.io/insta/assets/mobile2.CrsY5oVg_20x5FC.webp',
    website_url: 'https://gopi2401.github.io/insta/',
    github_url: 'https://github.com/gopi2401/insta/'
  }, {
    title: 'insta-package (npm package)',
    description: 'This Node.js package provides a simple and efficient way to download media from Instagram. Whether you need to download images, videos, or stories, this package makes it easy with minimal setup. Designed for developers, this package supports various media formats and ensures quick downloads, making it perfect for both personal use and larger projects. With straightforward API calls, you can integrate Instagram media downloading functionality into your applications effortlessly.',
    tech_stack: 'JavaScript',
    pic_url: 'https://img-c.udemycdn.com/course/240x135/2707188_7e44.jpg',
    website_url: 'https://www.npmjs.com/package/insta-package',
    github_url: 'https://github.com/gopi2401/insta-package'
  }, {
    title: 'IT website clone (equestsolutions)',
    description: 'Cloned a professional IT company website to practice responsive web design and layout structuring. The site includes multiple sections such as Home, About, Services, Careers, and Contact-all styled to closely match a real-world corporate site.',
    tech_stack: '',
    pic_url: 'https://gopi2401.github.io/equestsolutions/assets/hero_laptop_man_woman.B4RaJdby_ZFG1aC.svg',
    website_url: 'https://gopi2401.github.io/equestsolutions',
    github_url: 'https://github.com/gopi2401/equestsolutions'
  }, {
    title: 'Instagram-Background-Music',
    description: 'Instagram trending reels background music',
    tech_stack: 'react',
    pic_url: 'https://gopi2401.github.io/Instagram-Background-Music/image.jpg',
    website_url: 'https://gopi2401.github.io/Instagram-Background-Music/',
    github_url: 'https://github.com/gopi2401/Instagram-Background-Music'
  },
   {
    title: 'Restaurant Dashboard',
    description: 'Developed a comprehensive Restaurant Management Dashboard to help restaurant owners and staff manage daily operations efficiently through a centralized platform.',
    tech_stack: 'angular, express.js',
    pic_url: 'https://gopi2401.github.io/restaurant/icons/icon_512.png',
    website_url: 'https://gopi2401.github.io/restaurant/',
    github_url: 'https://github.com/gopi2401/restaurant'
  }]
}
