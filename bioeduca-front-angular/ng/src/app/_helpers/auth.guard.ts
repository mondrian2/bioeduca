import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }
    
    /*
    Intercepta a requisição
    verifica se o usuário está logado
    direciona para a tela de login em caso negativo
    */
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}