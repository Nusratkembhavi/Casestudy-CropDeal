import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CropService } from 'src/app/services/crop.service';
import { Crop } from '../../cls/crop';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  id: string
  crop: Crop
  constructor(private route: ActivatedRoute, private cropService: CropService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.crop = new Crop();
    this.cropService.getCropById(this.id).subscribe( data => {
      this.crop = data;
    });
  }

}
