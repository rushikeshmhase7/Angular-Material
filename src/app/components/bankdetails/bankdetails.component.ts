import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { Employeebankdetails } from 'src/app/model/employeebankdetails';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent {

  employee!:Employeebankdetails;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private employeService:EmployeeserviceService){}


  ngOnInit(): void {
    // this.employeeList=this.employeeService.getEmployeeList();
    
       this.firstFormGroup=this.formBuilder.group({
          id:[''],
          fullname :( ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32),
          Validators.pattern("^[.a-zA-Z ]+$")]]),
          email :( ['', [Validators.required, Validators.email]]),
          fathername :(['',  [Validators.required, Validators.minLength(6), Validators.maxLength(32),
            Validators.pattern("^[.a-zA-Z ]+$")]]),
          mothername :(['',  [Validators.required, Validators.minLength(6), Validators.maxLength(32),
            Validators.pattern("^[.a-zA-Z ]+$")]]),
          gender:( ['', Validators.required]),
          dateOfBirth:( ['', Validators.required]),
          mobileno :(['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]])  
      })

      this.secondFormGroup=this.formBuilder.group({
         fullname :( ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32),
          Validators.pattern("^[.a-zA-Z ]+$")]]),
          bankAccountNo:( ['', Validators.required]),
          bankName:( ['', Validators.required]),
          ifscCode:( ['', Validators.required]),
          internetBanking:( ['', Validators.required]),
          mobileBanking:( ['', Validators.required])
      })

     this.thirdFormGroup=this.formBuilder.group({
      presentAddress :( ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32),
        Validators.pattern("^[.a-zA-Z ]+$")]]),
        permanentAddress :( ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32),
          Validators.pattern("^[.a-zA-Z ]+$")]])
     })
     }



     addBasic(){
       if(this.firstFormGroup.valid)
       {
         this.employee=this.firstFormGroup.value;
         console.log(this.employee);
        this.employeService.postEmployeeDetails(this.firstFormGroup.value).subscribe();
       }
     }


     addBankDetails(){
      if(this.secondFormGroup.valid)
      {
        this.employeService.postBankDetails(this.secondFormGroup.value).subscribe();
      }
     }

     addAddress(){
      if(this.thirdFormGroup.valid)
      {
         this.employeService.postAddress(this.thirdFormGroup.value).subscribe();
      }
     }




}
