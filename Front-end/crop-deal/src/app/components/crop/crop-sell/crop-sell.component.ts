import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService } from 'src/app/services/crop.service';
import { Crop } from '../../cls/crop';

@Component({
  selector: 'app-crop-sell',
  templateUrl: './crop-sell.component.html',
  styleUrls: ['./crop-sell.component.css']
})
export class CropSellComponent implements OnInit {

  crops:Crop[];
  constructor(private cropService: CropService,
    private router: Router) { }


  ngOnInit(): void {
    this.getcrops(); 
  }
  private getcrops() {
    this.cropService.getcrop().subscribe(data =>{
      console.log(data);
      this.crops = data;
    });
  }

  Buy(){
    this.router.navigate(['pay']);
  }

}
