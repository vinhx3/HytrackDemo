import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logFrm: FormGroup;
  pgMsg: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logFrm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    let formObj = this.logFrm.getRawValue();
    if (formObj.userName === 'eb' && formObj.password === 'eb') {
      this.router.navigate(['/dashboard']);
    } else {
      this.pgMsg = {msg : "Loser Passwort falsch!", alert: 'alert-danger'};      
    }
  }

}
