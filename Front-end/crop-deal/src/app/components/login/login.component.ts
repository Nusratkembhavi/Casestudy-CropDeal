import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  constructor(private loginService:LoginService) { }

 

  ngOnInit(): void {
  }

  onSubmit()
  {
    //console.log("from is submitted");
    if((this.credentials.username!=''&& this.credentials.password!='')&&(this.credentials.username!=null&&this.credentials.password!=null))
    {
      console.log("we have to submit the from");
      this.loginService.generateToken(this.credentials).subscribe(
        (response)=>{
         console.log(response);

         this.loginService.loginUser(response)
         window.location.href="findcrop"
         
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
