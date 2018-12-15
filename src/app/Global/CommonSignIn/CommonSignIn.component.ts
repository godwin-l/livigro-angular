import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'embryo-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {

  display='none';

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  public mobile='';
  public isLogged;
  public wrong = false;
  public isOTP = false;
  public userId;
  public otpmsg;
  public otpmsgStatus = false; 
  public modals: any[] = [];
  public mobilepopup = false;

  ngOnInit() {
  }

  showpopup(){
    if(this.isOTP== false && this.wrong == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}


public verifyOTP(otp){
    
  this.apiService.verifyOTP(otp,this.userService.getMobile()).subscribe((data:  any) => {
    if( data.status != 'success')
    {
      this.otpmsgStatus=true;
      this.otpmsg = "Wrong OTP";   
    }
    else
    {
      this.userService.setUserId(data.data.userId);
      this.userId = this.userService.getUserId();
      console.log(this.userId);
      this.mobile=this.userService.getMobile();
      if(this.userService.getUserId()){
        this.isLogged=true;
      }
      else this.isLogged=false;


      if(this.isLogged)
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.otpmsgStatus=true;
        this.otpmsg = "Wrong OTP";
      }
      
    }
});
}

public otpLogin(mobile)
{
 this.apiService.otpLogin(mobile).subscribe((data:  any) => {
    this.userService.setMobile(mobile);
    this.isOTP = true;
 });
}

closeModalDialog(){
this.display='none'; 
this.wrong = false;
this.isOTP = false;
this.otpmsgStatus=false;
this.mobilepopup = false;
}


public otpbutton(){
this.display='block';
this.mobilepopup = true;
}

public login(mobile,password){
this.userService.setMobile(mobile);
this.apiService.login(password,mobile).subscribe((data:  any) => {
  this.userService.setUserId(data.data.userId);
  
  this.mobile=this.userService.getMobile();
  if(this.userService.getUserId()){
    this.isLogged=true;
  }
  else this.isLogged=false;


  if(this.isLogged)
  {
  this.router.navigate(['/home']);
  }
  else
  {
    this.wrong = true;
    this.display='block';
  }
});
}

}
