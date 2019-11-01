import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userServ: UserService
  ) { }

  get f() { return this.regForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.regForm.invalid) {
        return;
    }

    this.loading = true;
    this.userServ.registerUser({
      email: this.f.email.value,
      password:  this.f.password.value,
      nome:  this.f.nome.value,
      ocupacao:  this.f.ocupacao.value,
      sexo:  this.f.sexo.value,
    })
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}

  ngOnInit() {
      this.regForm = this.formBuilder.group({
          nome: ['', Validators.required],
          email: ['', Validators.required],
          ocupacao: ['', Validators.required],
          sexo: ['', Validators.required],
          password: ['', Validators.required],
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

}
