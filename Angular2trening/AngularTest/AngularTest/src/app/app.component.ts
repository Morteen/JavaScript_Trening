import { Component } from '@angular/core';
//import { CoursesComponent } from './courses.component';
import { KursComponent } from './kurs.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><courses></courses><kurs></kurs>`,
 
  directives: [KursComponent]

})
export class AppComponent  { name = 'Angular'; }

@Component({
    selector: 'my-app2',
    template: `<h1>Hei {{name}}</h1>`,
})
export class AppComponent1 {
    name = 'Test';
}

