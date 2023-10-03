import { AnamneseService } from 'src/app/services/anamnese.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private anamneseService: AnamneseService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dentista: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      /*
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],*/
    })
  }

  login(){
    this.anamneseService.login(this.form.value.dentista).subscribe((response) => {
      this.clientService.setClient(response.dentista)
    })
  }

}
