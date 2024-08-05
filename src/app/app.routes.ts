import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { ManageBurgerComponent } from './manage-burger/manage-burger.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { AuthGuard } from './guards/auth.guard'; // Correction: ajout de AuthGuard

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'burgers', component: BurgerListComponent, canActivate: [AuthGuard] }, // Correction: ajout de AuthGuard
  {
    path: 'manage-burgers',
    component: ManageBurgerComponent,
    canActivate: [AuthGuard, RoleGuard], // Correction: ajout de AuthGuard
    data: { expectedRole: 'manager' }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'manage-orders',
    component: ManageOrderComponent,
    canActivate: [AuthGuard, RoleGuard], // Correction: ajout de AuthGuard
    data: { expectedRole: 'manager' }
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: '/burgers', pathMatch: 'full' }, // Correction: route par défaut
  { path: '**', redirectTo: '/burgers' } // Correction: route de fallback
];