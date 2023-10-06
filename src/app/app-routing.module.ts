
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path:'details/:id',
    component: DetailsComponent, canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
