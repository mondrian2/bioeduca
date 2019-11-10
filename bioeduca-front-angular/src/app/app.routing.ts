import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login';
import { AuthGuard } from './_helpers';
import { InicialComponent } from './components/inicial/inicial.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioCadastrarComponent } from './components/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioConsultarComponent } from './components/usuario/usuario-consultar/usuario-consultar.component';
import { UsuarioAlterarComponent } from './components/usuario/usuario-alterar/usuario-alterar.component';
import { SoftwareCadastrarComponent } from './components/software/software-cadastrar/software-cadastrar.component';
import { SoftwareAlterarComponent } from './components/software/software-alterar/software-alterar.component';
import { SoftwareConsultarComponent } from './components/software/software-consultar/software-consultar.component';
import { SoftwareMeusSugeridosComponent } from './components/software/software-meus-sugeridos/software-meus-sugeridos.component';
import { QuestoesComponent } from './components/questoes/questoes.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { PendenciaComponent } from './components/pendencia/pendencia.component';

const routes: Routes = [
    { path: '', component: InicialComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'usuario-cadastrar', component: UsuarioCadastrarComponent },
    { path: 'usuario-consultar', component: UsuarioConsultarComponent, canActivate: [AuthGuard] },
    { path: 'usuario-alterar', component: UsuarioAlterarComponent, canActivate: [AuthGuard] },
    { path: 'software-cadastrar', component: SoftwareCadastrarComponent, canActivate: [AuthGuard] },
    { path: 'software-alterar/:id', component: SoftwareAlterarComponent, canActivate: [AuthGuard] },
    { path: 'software-consultar/:id', component: SoftwareConsultarComponent, canActivate: [AuthGuard] },
    { path: 'software-meus-sugeridos', component: SoftwareMeusSugeridosComponent, canActivate: [AuthGuard] },
    { path: 'questoes', component: QuestoesComponent, canActivate: [AuthGuard] },
    { path: 'avaliacao/:id', component: AvaliacaoComponent, canActivate: [AuthGuard] },
    { path: 'pendencia', component: PendenciaComponent, canActivate: [AuthGuard] },   
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);