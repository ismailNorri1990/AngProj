import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilsViewComponent } from './appareils-view/appareils-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';


const routes: Routes = [
  { path: 'appareils', canActivate : [AuthGuard], component: AppareilsViewComponent },
  { path: 'appareils/:id', canActivate : [AuthGuard] , component: SingleAppareilComponent },
  { path: 'edit', canActivate : [AuthGuard], component: EditAppareilComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', canActivate : [AuthGuard], component: AppareilsViewComponent },
  { path: 'not-Found', component: FourOhFourComponent },
  { path: '**', redirectTo : '/signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
