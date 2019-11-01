import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { AuthGuard } from './_helpers';
import { SugestaoComponent } from './components/software/sugestao/sugestao.component';
import { SugestaoCreateComponent } from './components/software/sugestao/create/sugestao-create/sugestao-create.component';
import { SoftwareComponent } from './components/software/software.component';
import { SugestaoEditComponent } from './components/software/sugestao/edit/sugestao-edit/sugestao-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { HomeComponent } from './components/home/home.component';
import { DetalheShowComponent } from './components/software/sugestao/detalhe-show/detalhe-show.component';

const routes: Routes = [
    { path: '', component: InicialComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
    { path: 'sugestao', component: SugestaoComponent, canActivate: [AuthGuard] },
    { path: 'sugestao-create', component: SugestaoCreateComponent, canActivate: [AuthGuard] },
    { path: 'sugestao-edit/:id', component: SugestaoEditComponent, canActivate: [AuthGuard] },
    { path: 'detalhe/:id', component: DetalheShowComponent},
    { path: 'minhas-sugestoes', component: SoftwareComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);