import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  employee!:Employee;

  registerForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private employeService:EmployeeserviceService,private router:Router){}

  
 ngOnInit(): void {
 // this.employeeList=this.employeeService.getEmployeeList();
 
    this.registerForm=this.formBuilder.group({
     
       id:[''],
       fullname :( ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32),
       Validators.pattern("^[.a-zA-Z ]+$")]]),
       email :( ['', [Validators.required, Validators.email]]),
       password :(['', [Validators.required, Validators.minLength(6), Validators.maxLength(12),
       Validators.pattern("^[.a-zA-Z0-9 ]+$")]]),
       gender:( ['', Validators.required]),
       dateOfBirth:( ['', Validators.required]),
       mobileno :(['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
       Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]),
       skills :(['', Validators.required])
   })
  }

  addData(){
    if(this.registerForm.valid)
    {

      this.employee=this.registerForm.value;
      
      console.log(this.employee);
     // this.employeService.postEmployee(this.employee);
     this.employeService.postEmployee(this.registerForm.value).subscribe();
     this.router.navigate(['/home']);
      
    }
  }

}
