import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(environment.SERVICE_ID, environment.TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: environment.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          if (e.target) {
            (e.target as HTMLFormElement).reset();
          }
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
