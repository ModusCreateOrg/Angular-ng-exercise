import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UsersListComponent } from '../app/core/components/users-list/users-list.component';
import { IonicModule } from '@ionic/angular';
import { UserDetailComponent } from './core/components/user-detail/user-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent, UsersListComponent, UserDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CoreModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
