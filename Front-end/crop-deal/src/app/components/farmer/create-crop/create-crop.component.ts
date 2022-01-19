import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService } from 'src/app/services/crop.service';
import { Crop } from '../../cls/crop';

@Component({
  selector: 'app-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.css']
})
export class CreateCropComponent implements OnInit {

  crop: Crop = new Crop();
  constructor(private cropService: CropService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCrop(){
    this.cropService.createCrops(this.crop).subscribe( data =>{
      console.log(data);
      this.goToCrop();
    },
    error => console.log(error));
  }

  goToCrop(){
    this.router.navigate(['/findcrop']);
  }
  
  onSubmit(){
    console.log(this.crop);
    this.saveCrop();
    this.router.navigate(['/findcrop']);
  }
}