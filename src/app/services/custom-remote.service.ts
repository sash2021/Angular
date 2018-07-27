import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomRemoteService {

  constructor(private httpClient: HttpClient) { }

  getRemoteData() {
    return this.httpClient.get('http://localhost:3000/allusers');
  }

  createRemoteUser(name: string, username: string, email: string) {
    console.log(name + ' ' + username + ' ' + email);
    const newUser = {
      'name': name,
      'username': username,
      'email': email
    };
    console.log(newUser);
    return this.httpClient.post('http://localhost:3000/allusers', newUser);
  }

}
