import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-alterar',
  templateUrl: './usuario-alterar.component.html',
  styleUrls: ['./usuario-alterar.component.less']
})
export class UsuarioAlterarComponent implements OnInit {

  regForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userServ: UserService,
    private authenticationService: AuthenticationService
  ) { }

  /*
    Simplifica o chamado às propriedades do formulario
    de sugestões.
  */

  get f() { return this.regForm.controls; }

  /*
    Valida usuário logado
    Atualiza cadastro com dados do formulário pelo serviço
  */

  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }

    this.loading = true;
    this.userServ.updateUser(this.authenticationService.currentUserValue.id, this.regForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.authenticationService.logout()
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  /*
    Instancia o formulário com as opções de validação
    Busca os dados do usuário e seta nos campos do formulário para exibição
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

    this.regForm.get('nome').setValue(this.authenticationService.currentUserValue.nome)
    this.regForm.get('ocupacao').setValue(this.authenticationService.currentUserValue.ocupacao)
    this.regForm.get('email').setValue(this.authenticationService.currentUserValue.username)
    this.regForm.get('sexo').setValue(this.authenticationService.currentUserValue.sexo)
    this.regForm.get('password').setValue(this.authenticationService.currentUserValue.password)

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';

  }

}
