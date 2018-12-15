import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ApiService } from  '../../api.service';
import {PackageService} from '../../package.service';
import { Router } from '@angular/router';
import { EmbryoService } from '../../Services/Embryo.service';

@Component({
  selector: 'embryo-TopProducts',
  templateUrl: './TopProducts.component.html',
  styleUrls: ['./TopProducts.component.scss']
})
export class TopProductsComponent implements OnInit {

   public  packages;
   public loading = false;

   @Input() products : any;

   @Input() currency : any;

   @Output() addToCart : EventEmitter<any> = new EventEmitter();

   gridLength = 4;
   randomSortProducts : any;

   constructor(public embryoService : EmbryoService , private  apiService:  ApiService, private router: Router, private packageService : PackageService) { }

   ngOnInit() {
      this.listPackages();
      if(this.products){
         this.randomSortProducts = this.products.sort( () => Math.random() - 0.5);
      }
   }

   public addToCartProduct(value:any) {
      value.status = 1;
      this.addToCart.emit(value);
   }

   public extendGridStructure(status) {
      if(status){
         if(this.gridLength != 12){
            this.gridLength += 4;
         }
      } else {
         if(this.gridLength != 4){
            this.gridLength -= 4;
         }
      }
   }

   public  listPackages(){
      this.loading = true;
      this.apiService.getTopPackages().subscribe((data:  any) => {
          this.loading = false;
          this.packages  =  data.data;
      });
    }
    public viewPackage(data){
      this.packageService.setPackageInfo(data);
      this.router.navigate(['/viewpackage']);
    }

}
