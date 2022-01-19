import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public credentials={
    name:'',
    password:'',
    city:'',
  };

  ngOnInit(): void {
  }
  formSubmit()
  {
    console.log(this.credentials);
    if(this.credentials.name ==''|| this.credentials.name==null)
    {
    
      return;
    }
    addUser: 

     this.loginService.addUser(this.credentials).subscribe(
       (data)=>{
         //success
         console.log(data);
         Swal.fire("Success !!", 'Registered Successfully','success');
       },
       (error)=>{
         console.log(error)
         Swal.fire('Error!!','Server error!!', 'error');
        }
     )
  }  
}



