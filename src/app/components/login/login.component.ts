import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 employee2!:Employee;
  loginForm!:FormGroup;

  hide=true;

constructor(private formBuilder: FormBuilder,
   private employeService:EmployeeserviceService,
   private router: Router
   
   ){

}



  ngOnInit() : void{
    
    this.loginForm=this.formBuilder.group({
      username:(['', Validators.required]),
      password:(['', Validators.required])
    })
  }


  addLoginDetails(){
     if(this.loginForm.valid){
      this.employeService.loginEmployee(this.loginForm.value).subscribe();
      this.employeService.setUserName(this.loginForm.controls['username'].value);
      this.router.navigate(['../']);
     }
  }



}
