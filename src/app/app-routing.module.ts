import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilsViewComponent } from './appareils-view/appareils-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'appareils', canActivate : [AuthGuard], component: AppareilsViewComponent },
  { path: 'appareils/:id', canActivate : [AuthGuard] , component: SingleAppareilComponent },
  { path: '', canActivate : [AuthGuard], component: AppareilsViewComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'not-Found', component: FourOhFourComponent },
  { path: '**', redirectTo : '/signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
