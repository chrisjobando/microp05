import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewContactPage } from '../new-contact/new-contact';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@IonicPage()
@Component({
  selector: 'page-contact-book',
  templateUrl: 'contact-book.html',
})
export class ContactBookPage {

  contacts: Contact[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ContactService: ContactService) {
  }

  ionViewWillEnter() {
    this.contacts = this.ContactService.getContacts();
  }

  onLoadContactsPage() {
    this.navCtrl.push(NewContactPage);
  }

}
