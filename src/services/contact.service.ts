import {Contact} from "../models/contact.model";

export class ContactService {
    private contacts: Contact[] =
    [{"name":"Andres", "organization":"UC3M", "mobile":"6666666666",
    "email":"andres@example.com"}];

    constructor() {

    }

    addContact(value: Contact) {
        this.contacts.push(value);
    }

    getContacts() {
        return this.contacts;
    }

    updateContact(value: Contact) {

    }

    removeContact(value:Contact) {

    }
}