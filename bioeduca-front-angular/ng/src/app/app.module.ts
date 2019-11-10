import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './components/login';
import { CardComponent } from './components/home/card/card.component';
import { AlertsComponent } from './common/alerts/alerts.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { InicialComponent } from './components/inicial/inicial.component'
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioCadastrarComponent } from './components/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioConsultarComponent } from './components/usuario/usuario-consultar/usuario-consultar.component';
import { UsuarioAlterarComponent } from './components/usuario/usuario-alterar/usuario-alterar.component';
import { UsuarioExcluirComponent } from './components/usuario/usuario-excluir/usuario-excluir.component';
import { SoftwareCadastrarComponent } from './components/software/software-cadastrar/software-cadastrar.component';
import { SoftwareAlterarComponent } from './components/software/software-alterar/software-alterar.component';
import { SoftwareConsultarComponent } from './components/software/software-consultar/software-consultar.component';
import { SoftwareMeusSugeridosComponent } from './components/software/software-meus-sugeridos/software-meus-sugeridos.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { QuestoesComponent } from './components/questoes/questoes.component';
import { PendenciaComponent } from './components/pendencia/pendencia.component';
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
        CardComponent,
        AlertsComponent,
        TopbarComponent,
        InicialComponent,
        UsuarioComponent,
        UsuarioExcluirComponent,
        UsuarioAlterarComponent,
        UsuarioConsultarComponent,
        UsuarioCadastrarComponent,
        SoftwareConsultarComponent,
        SoftwareAlterarComponent,
        SoftwareCadastrarComponent,
        SoftwareMeusSugeridosComponent,
        QuestoesComponent,
        AvaliacaoComponent,
        PendenciaComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }