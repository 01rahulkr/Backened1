import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { GiveTestComponent } from './give-test/give-test.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateUserHomeComponent } from './update-user-home/update-user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { LoginService } from './login.service';
import { UserService } from './user-service.service';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UpdateUserComponent,

    GiveTestComponent,
    HomeComponent,
   
    HeaderComponent,
    FooterComponent,
    UpdateUserHomeComponent,
    UserDashboardComponent,
    ViewUsersComponent,
    AssignTestComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    
    AuthGuard,
    LoginService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
