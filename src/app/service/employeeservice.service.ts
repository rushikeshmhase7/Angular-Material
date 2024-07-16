import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

   userName!:string;

   baseURL="http://localhost:3000";
  constructor(private http : HttpClient) { }

  postEmployeeDetails(employee:Employee)
  {
    console.log(employee);
      return this.http.post<Employee>(this.baseURL +"/addEmployee",employee);
  }
  
  postBankDetails(employee:Employee)
  {
    console.log(employee);
      return this.http.post<Employee>(this.baseURL +"/addBank",employee);
  }
  
  postAddress(employee:Employee)
  {
    console.log(employee);
      return this.http.post<Employee>(this.baseURL +"/addAddress",employee);
  }



  postEmployee(employee:Employee)
{
  console.log(employee);
    return this.http.post<Employee>(this.baseURL +"/getEmployee",employee);
}

loginEmployee(employee1:Employee){
  console.log(employee1);
  return this.http.post<Employee>(this.baseURL +"/getLogin",employee1);
}

getUserName(){
  return this.userName;
}

setUserName( name: string){
  this.userName=name;

}



}
