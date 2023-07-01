/*import { Component } from '@angular/core';

@Component({
  selector: 'app-api-dog',
  templateUrl: './api-dog.page.html',
  styleUrls: ['./api-dog.page.scss'],
})
export class ApiDogPage {
  imageUrl: string = ''; 
  constructor() { }

  async API() {
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();
    this.imageUrl = data.message;
  }
}
*/

import { Component } from '@angular/core';
import { ApiDogService } from 'src/services/api-dog.service';

@Component({
  selector: 'app-api-dog',
  templateUrl: './api-dog.page.html',
  styleUrls: ['./api-dog.page.scss'],
})
export class ApiDogPage {
  imageUrl: string = '';
  breed: string = '';

  constructor(
    private apidog: ApiDogService
  ) { }

  async API(){
    
    const v = await this.apidog.API();
    this.imageUrl = v[0];
    this.breed = v[1];

  }

}
