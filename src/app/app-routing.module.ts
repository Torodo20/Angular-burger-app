// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { BurgerListComponent } from './burger-list/burger-list.component';
// import { ManageBurgerComponent } from './manage-burger/manage-burger.component';
// import { ManageOrderComponent } from './manage-order/manage-order.component';
// import { ForbiddenComponent } from './forbidden/forbidden.component';
// import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './guards/auth.guard';
// import { RoleGuard } from './guards/role.guard';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'burgers', component: BurgerListComponent, canActivate: [AuthGuard] },
//   {
//     path: 'manage-burgers',
//     component: ManageBurgerComponent,
//     canActivate: [AuthGuard, RoleGuard],
//     data: { expectedRole: 'manager' }
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     canActivate: [RoleGuard],
//     data: { expectedRole: 'admin' }
//   },
//   {
//     path: 'manage-orders',
//     component: ManageOrderComponent,
//     canActivate: [AuthGuard, RoleGuard],
//     data: { expectedRole: 'manager' }
//   },
//   { path: 'forbidden', component: ForbiddenComponent },
//   { path: '', redirectTo: '/burgers', pathMatch: 'full' },
//   { path: '**', redirectTo: '/burgers' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { HomeComponent } from './home/home.component';
import { ManageBurgerComponent } from './manage-burger/manage-burger.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BurgerListComponent } from './burger-list/burger-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'burgers', component: BurgerListComponent, canActivate: [AuthGuard] },
  {
    path: 'manage-burgers',
    component: ManageBurgerComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'manager' }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin' } // Defining the expected role here
  },
  {
    path: 'manage-orders',
    component: ManageOrderComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'manager' }
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

