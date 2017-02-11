import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  `,
})
export class UserComponent {
  name: string;
  email: string;
  address: address;

  constructor() {
    this.name = 'Aaron';
    this.email = "aaron@gmail.com";
    this.address = {
      street: '12 main street',
      city: 'Bentonville',
      state: 'AR'
    }
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
