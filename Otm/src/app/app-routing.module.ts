import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { GiveTestComponent } from './give-test/give-test.component';
import { HomeComponent } from './home/home.component';
import { UpdateUserHomeComponent } from './update-user-home/update-user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AssignTestComponent } from './assign-test/assign-test.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "addUser", component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'updateuser/:email', component: UpdateUserComponent, canActivate: [AuthGuard] },
  { path: 'viewUsers', component: ViewUsersComponent, canActivate: [AuthGuard] },
  { path: 'giveTest/:testId', component: GiveTestComponent, canActivate: [AuthGuard] },
  { path: 'updateUser', component: UpdateUserHomeComponent, canActivate: [AuthGuard] },
  { path: 'userDashboard/:email', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'assignTest/:email', component: AssignTestComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  RegistrationComponent,
  GiveTestComponent,
  HomeComponent,
  LoginComponent,
  ]
