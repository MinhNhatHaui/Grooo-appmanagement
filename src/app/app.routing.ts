import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'users/user-profile', component: UserProfileComponent },
  { path: 'users/edit-user', component: UserProfileComponent },
  { path: 'dashboard/app-detail/edit-app', component: EditAppComponent },
  { path: 'dashboard/edit-app', component: EditAppComponent },
  { path: 'dashboard/app-detail', component: AppDetailComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
