import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dentistaService: DentistaService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dentista: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    })
  }

  login(){
    this.authService.login(this.form.value.dentista, this.form.value.password).subscribe((response) => {
      this.dentistaService.setDentista(response.dentista)

    })

  }

}
