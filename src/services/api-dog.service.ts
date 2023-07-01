import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDogService {

  constructor() { }



  async API() {
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json(); 
    const imageUrl = data.message; // return 
    const breedStartIndex = imageUrl.indexOf('/breeds/') + 8;
    const breedEndIndex = imageUrl.lastIndexOf('/');
    const breed = imageUrl.substring(breedStartIndex, breedEndIndex); // return 
    console.log(breed)

    return [imageUrl, breed]
  }
}
