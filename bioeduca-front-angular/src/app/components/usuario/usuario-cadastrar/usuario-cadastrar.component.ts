import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.less']
})
export class UsuarioCadastrarComponent implements OnInit {

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

  /*
    Simplifica o chamado às propriedades do formulario
    de sugestões.
  */

  get f() { return this.regForm.controls; }

  /*
    Valida os dados do formulário
    Ativa o loader
    Envia dados do formulário para adição pelo serviço
  */

  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }

    this.loading = true;
    this.userServ.registerUser({
      email: this.f.email.value,
      password: this.f.password.value,
      nome: this.f.nome.value,
      ocupacao: this.f.ocupacao.value,
      sexo: this.f.sexo.value,
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

  /*
    Instancia o formulário com as opções de validação
    Seta rota de retorno
  */

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
