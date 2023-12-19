import { RegisteredMessage } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { RegisterdataService } from '../registerdata.service';
export interface User{
  id:number;
  name:string;
  email:string;
  password:string
}

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  constructor(private registerData:RegisterdataService){
   this.getUser()
  }
  data:any
  getDetails:any
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', password: '*********' },
    { id: 2, name: 'tryon', email: 'tryon1233@gmail.com', password: '*********' },
    { id: 1, name: 'Sansa Stark', email: 'sansa123@gmail.com', password: '*********' },
    { id: 2, name: 'Emilia Clark', email: 'Emi189@gmail.com', password: '*********' },
    // Add more user data as needed
  ];
  getUser(){
    this.registerData.getDetails().subscribe((res:any)=>{
      this.getDetails=res
      console.log(res)
    })
  }
}
