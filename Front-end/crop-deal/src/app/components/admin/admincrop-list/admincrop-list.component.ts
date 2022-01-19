import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService } from 'src/app/services/crop.service';
import { Crop } from '../../cls/crop';
import { Dealer } from '../../cls/dealer';
import { Payment } from '../../cls/payment';

@Component({
  selector: 'app-admincrop-list',
  templateUrl: './admincrop-list.component.html',
  styleUrls: ['./admincrop-list.component.css']
})
export class AdmincropListComponent implements OnInit {

  crops:Crop[];
  dealers:Dealer[];
  payments:Payment[];
  constructor(private cropService: CropService,
    private router: Router) { }

  ngOnInit(): void {
  this.getcrops(); 
  this.getdealers();
  this.getpayments();
}
private getcrops() {
  this.cropService.getcrop().subscribe(data =>{
    console.log(data);
    this.crops = data;
  });
}
private getdealers() {
  this.cropService.getdealer().subscribe(data =>{
    console.log(data);
    this.dealers = data;
  });
}
private getpayments() {
  this.cropService.getpayment().subscribe(data =>{
    console.log(data);
    this.payments = data;
  });
}

cropDetails(id: string){
  this.router.navigate(['crop-details', id]);
}

dealerDetails(id: string){
  this.router.navigate(['dealer-details', id]);
}
// updateCrop(id: string){
//   this.router.navigate(['update-crop', id]);
// }

deleteCrop(id: string){
  this.cropService.deleteCrop(id).subscribe( data => {
    console.log(data);
    this.getcrops();
  })
}

deleteDealer(id: string){
  this.cropService.deleteDealer(id).subscribe( data => {
    console.log(data);
    this.getdealers();
  })
}

}

