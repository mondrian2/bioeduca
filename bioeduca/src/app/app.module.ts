import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './components/login';;
import { AnoLetivoComponent } from './components/home/ano-letivo/ano-letivo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SoftwareComponent } from './components/software/software.component';
import { AvaliacaoComponent } from './components/software/avaliacao/avaliacao.component';;
import { AceiteComponent } from './components/software/aceite/aceite.component';
import { SugestaoComponent } from './components/software/sugestao/sugestao.component';;
import { ConteudoComponent } from './components/home/conteudo/conteudo.component';
import { CardComponent } from './components/home/card/card.component';;
import { AlertsComponent } from './common/alerts/alerts.component';
import { SugestaoCreateComponent } from './components/software/sugestao/create/sugestao-create/sugestao-create.component';
import { SugestaoListComponent } from './components/software/sugestao/list/sugestao-list/sugestao-list.component';
import { SugestaoEditComponent } from './components/software/sugestao/edit/sugestao-edit/sugestao-edit.component';;
import { RegisterComponent } from './components/register/register.component'
;
import { TopbarComponent } from './common/topbar/topbar.component'
;
import { InicialComponent } from './components/inicial/inicial.component'
import { HomeComponent } from './components/home/home.component';import { DetalheShowComponent } from './components/software/sugestao/detalhe-show/detalhe-show.component';
;
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        RatingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AnoLetivoComponent ,
        PerfilComponent ,
        SoftwareComponent ,
        AvaliacaoComponent ,
        AceiteComponent,
        SugestaoComponent,
        CardComponent,
        ConteudoComponent,
        AlertsComponent,
        SugestaoEditComponent,
        SugestaoListComponent,
        SugestaoCreateComponent,
        RegisterComponent,
        TopbarComponent,
        InicialComponent,
        DetalheShowComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }