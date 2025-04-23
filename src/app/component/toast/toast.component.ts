import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ToastService } from '../../toast.service';
@Component({
  selector: 'app-toast',
  imports: [NgFor],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  constructor(public toastService: ToastService) { }

  removeToast(index: number) {
    this.toastService.remove(index);
  }
}
