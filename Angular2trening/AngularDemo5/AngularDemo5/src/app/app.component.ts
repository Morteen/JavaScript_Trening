import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1>'+
  '<p> Din mail er:{{email }}</p>'+
  '<p>Adresse: {{adress.gate }}</p> ' +
  '<p>By : {{adress.by}}</p>' +
  '<p>Fylke : {{adress.fylke}}</p>'
})
export class AppComponent  {
    name = 'Morten';
    email = 'mortenolsen4@gmail.com',
    adress = {
        gate: 'Gautesvei 9',
        by: 'Skien',
        fylke:'Telemark'
    }
    constructor() {
        console.log("Constructor kjører hver gang")
    }
}
