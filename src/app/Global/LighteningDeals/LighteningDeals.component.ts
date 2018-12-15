import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from  '../../api.service';
import {PackageService} from '../../package.service';
import { Router } from '@angular/router';


@Component({
  selector: 'embryo-LighteningDeals',
  templateUrl: './LighteningDeals.component.html',
  styleUrls: ['./LighteningDeals.component.scss']
})


export class LighteningDealsComponent implements OnInit {

   @Input() lighteningDeals : any;
   public  packages;
   public loading = false;

   constructor(private  apiService:  ApiService, private router: Router, private packageService : PackageService) { }

   ngOnInit() {
     this.listPackages();
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
