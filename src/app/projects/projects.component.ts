import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [{
    title: 'BOOKMYPLOTS',
    description: 'Real Estate Platform with Solid.js and AWS."',
    tech_stack: 'Solid.js, Astro.js, AWS, Serverless APIs',
    pic_url: 'https://bookmyplots.co/_image?href=%2F_astro%2FLastlogo.Df4UdYCL.png&f=webp',
    website_url: 'https://bookmyplots.co/',
    github_url: ''
  }, {
    title: 'News Website',
    description: 'News aggregation platform using NewsAPI.',
    tech_stack: 'https://github.com/gopi2401/news-web',
    pic_url: 'https://private-user-images.githubusercontent.com/117622182/375651434-b643d344-3c75-460b-908b-23403f2df46d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzMTQ1MTgsIm5iZiI6MTczODMxNDIxOCwicGF0aCI6Ii8xMTc2MjIxODIvMzc1NjUxNDM0LWI2NDNkMzQ0LTNjNzUtNDYwYi05MDhiLTIzNDAzZjJkZjQ2ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQwOTAzMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZTBjN2EyYmNkMjE5NzNjZjNkMjRiZjFkMGNiYzM1NjVmZTlmZWYzNWQ1NTg3OWZjOGQ1OTc5YTFjOTNjNDU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.C4JsRHt_dcQLrjUyc-mcizEY1nPxL_zO9-Y9k2WjzC4',
    website_url: '',
    github_url: 'https://github.com/gopi2401/news-web'
  }, {
    title: 'insta',
    description: 'This application allows easy downloading of Instagram posts, reels, stories, YouTube videos, and shorts. It also includes features for viewing and downloading WhatsApp statuses and Instagram profiles.',
    tech_stack: '',
    pic_url: 'https://private-user-images.githubusercontent.com/117622182/276852499-344ddc66-45cc-49c6-bfef-0457f4908ccf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzMTQzODgsIm5iZiI6MTczODMxNDA4OCwicGF0aCI6Ii8xMTc2MjIxODIvMjc2ODUyNDk5LTM0NGRkYzY2LTQ1Y2MtNDljNi1iZmVmLTA0NTdmNDkwOGNjZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQwOTAxMjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MzhjMWRlZjRjZDYzYjY1NmM2NTEzZDhiZDc1NThjOGUzNzdhZDQ3MTMzYmUzYjI4MzVmOGZkOTdkMjA2MjI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.HeQiL39KmZyJeq6ArBvVPCzK-fTF7lOSe6drLk4uEUU',
    website_url: '',
    github_url: ''
  }, {
    title: 'insta-package (npm package)',
    description: 'This Node.js package provides a simple and efficient way to download media from Instagram. Whether you need to download images, videos, or stories, this package makes it easy with minimal setup. Designed for developers, this package supports various media formats and ensures quick downloads, making it perfect for both personal use and larger projects. With straightforward API calls, you can integrate Instagram media downloading functionality into your applications effortlessly.',
    tech_stack: 'JavaScript',
    pic_url: 'https://img-c.udemycdn.com/course/240x135/2707188_7e44.jpg',
    website_url: 'https://www.npmjs.com/package/insta-package',
    github_url: 'https://github.com/gopi2401/insta-package'
  }, {
    title: 'Company website clone (equestsolutions)',
    description: '',
    tech_stack: '',
    pic_url: '',
    website_url: '',
    github_url: 'https://github.com/gopi2401/equestsolutions'
  }, {
    title: 'Instagram-Background-Music',
    description: 'Instagram trending reels background music',
    tech_stack: 'react',
    pic_url: 'https://gopi2401.github.io/instagram-background-music-pack-(1)/image.jpg',
    website_url: 'https://gopi2401.github.io/instagram-background-music-pack-(1)/',
    github_url: 'https://github.com/gopi2401/Instagram-Background-Music'
  }]
}
