import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})
export class TopbarComponent implements OnInit {
  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

  ngOnInit() {}


  

}
