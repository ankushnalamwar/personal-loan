import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VarificationFormComponent } from './varification-form/varification-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'verify', component:VarificationFormComponent},
   {path:'welcome',component:WelcomeComponent},
   {path:'',redirectTo:'/verify',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
