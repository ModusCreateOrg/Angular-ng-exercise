import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };

  isLoggedIn: boolean;

  constructor(
    public appService: AppService
  ) {}

  ngOnInit() {
    this.appService.isLoggedIn$.subscribe(value => this.isLoggedIn = value);
  }

  login() {
    this.appService.isLoggedIn$.next(true);
    this.appService.updateLoggedIn();
  }

  signup() {
    this.appService.updateLoggedIn();
  }

  logout() {
    this.appService.updateLoggedOut();
  }
}
