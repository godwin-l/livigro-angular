import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {ApiService} from '../../../api.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  display='none';

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  ngOnInit() {
  }

  closeModalDialog(){
    this.display='none'; 
   }

public verifyOTP(otp){
  this.apiService.verifyOTP(otp,this.userService.getMobile()).subscribe((data:  any) => {
    if( data.status != 'success')
    {
      this.display='block';   
    }
    else
    {
      this.router.navigate(['/password']);
    }
});
}

}
