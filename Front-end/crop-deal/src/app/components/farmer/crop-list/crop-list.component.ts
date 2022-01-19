import { Component, OnInit } from '@angular/core';
import { Crop } from '../../cls/crop';
import { CropService } from '../../../services/crop.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

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

  cropDetails(id: string){
    this.router.navigate(['crop-details', id]);
  }
  updateCrop(id: string){
    this.router.navigate(['update-crop', id]);
  }

  deleteCrop(id: string){
    this.cropService.deleteCrop(id).subscribe( data => {
      console.log(data);
      location.reload()
     // this.getcrops();
      this.router.navigate(['findcrop']);
    })
  }

}
