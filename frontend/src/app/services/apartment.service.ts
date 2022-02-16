import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  readonly url = "http://localhost:4500/api/images/"
  apartments$ = new Subject<Apartment[]>();

  constructor(private http: HttpClient) { }

  getApartments(){
    this.http.get(this.url).subscribe((data)=>{
      this.apartments$.next(data as Apartment[])
    })
  }

  getApartmentsStream(){
    return this.apartments$.asObservable()
  }

}
