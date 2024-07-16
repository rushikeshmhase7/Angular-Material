import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent  {

  title = 'assingment2';
  userName!:string;



  constructor(public dialog:MatDialog, private emplyeeService:EmployeeserviceService){}
  ngOnInit(): void {

    this.userName=this.emplyeeService.getUserName();
    console.log(this.userName);
    
  }

  ceoMessage(){ this.dialog.open(CeoMessage,{ width:'550px', height:'250px'});}

  contactDetails(){ this.dialog.open(ContactDetails,{   width:'550px',   height:'250px'  });}


}
@Component(
  {  selector:'CeoMessage', 
   templateUrl:'ceomessage.html' })

export class CeoMessage{}


@Component(
  {  selector:'ContactDetails', 
   templateUrl:'contactdetails.html' })

export class ContactDetails{}
