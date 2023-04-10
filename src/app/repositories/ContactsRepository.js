const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(),
    name: "Mateus",
    email: "mateus@mail.com",
    phone: "1199231311",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "ze",
    email: "ze@mail.com",
    phone: "1199231311",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, rejects) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, rejects) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
