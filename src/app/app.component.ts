import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  `,
})
export class AppComponent {
  name = 'Aaron';
  email = "aaron@gmail.com";
  address = {
    street: '12 main street',
    city: 'Bentonville',
    state: 'AR'
  }
}
