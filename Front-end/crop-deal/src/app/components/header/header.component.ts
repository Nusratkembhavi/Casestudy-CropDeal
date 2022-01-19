import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn=false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  }
  logoutUser()
  {
    this.loginService.logout()
    location.reload()
    // this.router.navigate([''])
  }

}
