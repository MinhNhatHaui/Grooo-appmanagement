import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UserService } from './core/user-test.service';
import { EditAppComponent } from './edit-app/edit-app.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddAppComponent } from './edit-app/add-app/add-app.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserProfileComponent,
    EditAppComponent,
    AppDetailComponent,
    EditUserComponent,
    AddAppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
