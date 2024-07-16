import { Component } from '@angular/core';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  typesofsports:string[]=['Vacation planning','reading','movies watching','Blogging'];

  constructor(private emplyeeService:EmployeeserviceService){

  }

  userName:string=this.emplyeeService.getUserName();

}
