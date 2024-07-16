import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TaskComponent } from './components/task/task.component';
import { BankdetailsComponent } from './components/bankdetails/bankdetails.component';

const routes: Routes = [
  
    { path: 'login', component: LoginComponent },

    {
    path: '', component: DashbordComponent,
    children: [

      { path: 'home', component: HomeComponent },
      // 
      { path: 'register', component: RegistrationComponent },
      { path: 'task', component: TaskComponent },
      { path: 'bank', component: BankdetailsComponent },

    
]



}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
