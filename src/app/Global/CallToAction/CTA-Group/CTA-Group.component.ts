import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../../api.service';
import {PackageService} from '../../../package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'embryo-CtaGroup',
  templateUrl: './CTA-Group.component.html',
  styleUrls: ['./CTA-Group.component.scss']
})
export class CTAGroupComponent implements OnInit {

   public  packages;
   public loading = false;

   callToActionArray : any = [
      {
         img_path:"assets/images/mobile.jpg",
         route :"/products/gadgets/11"
      },
      {
         img_path:"assets/images/sports.jpg",
         route :"/products/men/3"
      },
      {
         img_path:"assets/images/headphone.jpg",
         route :"/products/gadgets/10"
      },
      {
         img_path:"assets/images/t-shirts.jpg",
         route :"/products/men/5"
      },
      {
         img_path:"assets/images/watch.jpg",
         route :"/products/gadgets/12"
      },
      {
         img_path:"assets/images/shoes.jpg",
         route :"/products/men/3"
      }
   ]

   constructor(private  apiService:  ApiService, private router: Router, private packageService : PackageService) { }

   ngOnInit() {
   }

   public  listPackages(){
      this.loading = true;
      this.apiService.getPackages().subscribe((data:  any) => {
          this.loading = false;
          this.packages  =  data.data;
      });
    }
    public viewPackage(data){
      this.packageService.setPackageInfo(data);
      this.router.navigate(['/viewpackage']);
    }

}
