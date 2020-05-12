import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from "@angular/platform-browser";
import tasks, { Task } from "../tasks/tasks";
import { User, Users } from '../models/user.model'
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AppService {
  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  public userListUrl: string = 'https://reqres.in/api';

  getTasks(): Array<Task> {
    return tasks.map(task => {
      const updatedTask: Task = { description: "" };
      if (task.links && task.links.length) {
        for (const link of task.links) {
          updatedTask.description = task.description.replace(
            "{{link}}",
            `<a href='${link}'>${link}</a>`
          );
        }
      } else if (task.routerLinks && task.routerLinks.length) {
        for (const link of task.routerLinks) {
          updatedTask.description = task.description.replace(
            "{{link}}",
            `<a href='/${link}' routerLink="${link}">${link} route</a>`
          );
        }
      }
      updatedTask.description = this.sanitizer.bypassSecurityTrustHtml(
        updatedTask.description
      ) as string;
      return Object.assign({}, task, updatedTask);
    });
  }

  public getUsers(): Observable<any>{
    const page1 = this.http.get<Users[]>(this.userListUrl + '/users?page=1')
      .pipe(
        map(user => user['data'])
      )
    const page2 = this.http.get<Users[]>(this.userListUrl + '/users?page=2')
      .pipe(
        map(user => user['data'])
      );
    return zip(page1, page2)
  }

  public getUser(userId): Observable<User> {
    return this.http.get<User>(this.userListUrl + `/users/${userId}`).pipe(
      map(user => user['data'])
    );
  } 

}
