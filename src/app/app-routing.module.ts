import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import{AngularFireAuthGuard,redirectUnauthorizedTo, redirectLoggedInTo } from'@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToGame = () => redirectLoggedInTo(['game/:gameId']);
//

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'login', component: LoginComponent, canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToGame }},
  {path: 'game/:gameId', component: GameComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
