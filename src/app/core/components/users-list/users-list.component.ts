import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../../services/app.service'
import { User } from '../../models/user.model'


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList$ = new BehaviorSubject([]);

  constructor(
    public appService: AppService,
    public router: Router,
    public route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.appService.getUsers().subscribe(users => {
      return this.usersList$.next(users.flat())
    });
  }

  public navigateToUser(user: User) {
      this.router.navigate([`/user/detail/${user.id}`])
  }

}
