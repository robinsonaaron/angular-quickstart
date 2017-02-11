import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  <h3>Hobbies</h3>
  <ul>
    <li *ngFor="let hobby of hobbies">
      {{hobby}}
    </li>
  </ul>
  `,
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];

  constructor() {
    this.name = 'Aaron';
    this.email = "aaron@gmail.com";
    this.address = {
      street: '12 main street',
      city: 'Bentonville',
      state: 'AR'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
