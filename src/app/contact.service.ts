import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Matti', 'Meikäläinen'));
    this.contacts.push(new Contact(2, 'Maisa', 'Meikäläinen'));
    this.contacts.push(new Contact(3, 'Mikko', 'Meikäläinen'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}

