import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  [x: string]: any;

  constructor(snackbar: MatSnackBar) { }

  openSnackBar(message: String, action: String) {
    if (action === 'error') {
      this.snackbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panalClass: ['black-snackbar']
      })
    }
    else {
      this.snackbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panalClass: ['green-snackbar']
      })
    }
  }
}
