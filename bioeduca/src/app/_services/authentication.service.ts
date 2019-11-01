import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public _user: any;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        
        return this.http.post<any>(`${environment.apiUrl}/authentication`, {
            
                "strategy": "local",
                "email": username,
                "password": password
              
        })
            .pipe(map(user => {
                this._user = {
                    id: user.user._id,
                    username: user.user.email,
                    nome: user.user.nome,
                    ocupacao: user.user.ocupacao,
                    sexo: user.user.sexo,
                    token: user.accessToken
                };
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(this._user));
                this.currentUserSubject.next(this._user);
                return this._user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}