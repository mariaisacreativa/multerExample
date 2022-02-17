import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {

  form: FormGroup;
  apartment!: Apartment;
  images!: FileList;

  constructor(private apartmentService: ApartmentService) { 
    this.form = new FormGroup({
      idApartment: new FormControl(null),
      images: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onChangeInput(event: Event){
    this.images = (event.target as HTMLInputElement).files as FileList
  }

  createApartment(){
    this.apartmentService.postApartment(this.form.value.idApartment,this.images);
    this.form.reset();
  }

}
