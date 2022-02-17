import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  readonly url = "http://localhost:4500/api/images/";
  apartments: Apartment[] = [];
  apartments$ = new Subject<Apartment[]>();

  constructor(private http: HttpClient) { }

  getApartments(){
    this.http.get<Apartment[]>(this.url).subscribe((data)=>{
      this.apartments = data;
      this.apartments$.next(this.apartments);
    })
  }

  getApartmentsStream(){
    return this.apartments$.asObservable();
  }

  postApartment(idApartment: string, images: FileList){
    const apartment = new FormData();
    apartment.append("idApartment", idApartment);
    for(let i=0; i<images.length; i++){
      console.log(images[i])
      apartment.append("images",images[i]);
    }

    this.http.post<Apartment>(this.url+"multiple", apartment).subscribe((response)=>{
      this.apartments.push(response);
      this.apartments$.next(this.apartments);
    })
    
  }

}
