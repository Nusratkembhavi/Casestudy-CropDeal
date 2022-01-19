import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CropService } from 'src/app/services/crop.service';
import { Crop } from '../../cls/crop';
@Component({
  selector: 'app-update-crop',
  templateUrl: './update-crop.component.html',
  styleUrls: ['./update-crop.component.css']
})
export class UpdateCropComponent implements OnInit {

  constructor(private cropService: CropService,
    private route: ActivatedRoute,
    private router: Router) { }

    id: string;
  crop: Crop= new Crop();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cropService.getCropById(this.id).subscribe(data => {
      this.crop = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cropService.updateCrop(this.id, this.crop).subscribe( data =>{
      this.goToCrops();
    }
    , error => console.log(error));
  }

  goToCrops(){
    this.router.navigate(['/findcrop']);
  }

}
