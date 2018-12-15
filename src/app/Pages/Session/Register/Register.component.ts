import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {ApiService} from '../../../api.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'embryo-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  display='none';

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  ngOnInit() {
  }

  closeModalDialog(){
    this.display='none'; 
   }

   public register(mobile){
    this.userService.setMobile(mobile);
    this.apiService.register(mobile).subscribe((data:  any) => {
      
      if( data.status != 'success')
      {
        this.display='block';
      }
      else
      {
        this.router.navigate(['/otp']);  
      }
  });
  }

}
