import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {

  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.apartmentService.getApartments();
    this.apartmentService.getApartmentsStream().subscribe((apartments: Apartment[])=>{
      this.apartments = apartments;
      console.log(apartments)
    });

  }

}
