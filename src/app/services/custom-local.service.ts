import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLocalService {

  locations = ['Chennai', 'Kolkatta', 'Gurugram', 'Mumbai', 'Bengaluru']

  getLocalLocation() {
    return "I will send you the location details..."
  }

  constructor() { }
}
