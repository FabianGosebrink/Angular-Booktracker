import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private durationInMs: 2000;
  constructor(public snackBar: MatSnackBar) {}

  show(message: string) {
    this.snackBar.open(message, null, {
      duration: this.durationInMs
    });
  }
}
