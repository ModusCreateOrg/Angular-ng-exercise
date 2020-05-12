import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AppService } from '../../services/app.service'
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user$ = new BehaviorSubject({});

  constructor(
    private appService: AppService,
    public route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
   this.route.params.subscribe(params => this.appService.getUser(params.id)
   .subscribe(user => this.user$.next(user)));
  }

  public back() {
    this.location.back();
  }

}
