import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppService } from '../../services/app.service'


@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
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
    this.appService.updateLoggedIn();
  }

  logout() {
    this.appService.updateLoggedOut();
  }
}
