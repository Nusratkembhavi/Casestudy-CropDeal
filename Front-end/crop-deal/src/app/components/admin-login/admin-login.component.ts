import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../../services/admin-login.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private adminloginService:AdminLoginService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    //console.log("from is submitted");
    if((this.credentials.username!=''&& this.credentials.password!='')&&(this.credentials.username!=null&&this.credentials.password!=null))
    {
      console.log("we have to submit the from");
      this.adminloginService.generateToken(this.credentials).subscribe(
        (response)=>{
         console.log(response);

         this.adminloginService.loginUser(response)
         window.location.href="admin-crop"
         
        },
        error=>{
          console.log(error);
          
        }
      )
      
    }else{
      console.log("Fields are empty");
      
    }
  }
}