class ContactController {
  index(request, response) {
    response.send("Contact Controller");
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

module.exports = new ContactController();
