import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(public toastService: ToastService) {}

  showToast(msg: string) {
    this.toastService.add(msg);
    setTimeout(() => {
      this.toastService.remove(0);
    }
    , 4000); // Remove the toast after 3 seconds
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(environment.SERVICE_ID, environment.TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: environment.PUBLIC_KEY,
      })
      .then(
        () => {
          this.showToast('Email sent successfully!');
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
