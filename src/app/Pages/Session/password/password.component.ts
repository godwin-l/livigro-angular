import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {ApiService} from '../../../api.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  ngOnInit() {
  }

  public registerUser(password){
    this.apiService.registerUser(password,this.userService.getMobile()).subscribe((data:  any) => {
       this.router.navigate(['/thankyou']);
  });
  }

}
