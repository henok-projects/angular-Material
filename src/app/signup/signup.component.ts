import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../service/snackbar.service';
import { UserService } from '../service/user.service';
import { GlobalConstant } from '../shared/global-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: any = FormGroup;
  responseMessage: any; 


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstant.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstant.emailRege)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstant.contactNumberRege)]],
      password: [null, [Validators.required]]
    })
  }

  handleSubmit() {
    this.ngxService.start;
    var formData = this.signupForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password
    }
    this.userService.signUp(data).subscribe((response: any) => {
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage, "");
      this.router.navigate(['/']);
    }, (error) => {
      this.ngxService.stop()
      if (error.error?.message) {
        this.responseMessage = error.error.message

      }
      else {
        this.responseMessage = GlobalConstant.generateError
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstant.error)
    })
  }

}
