import React from "react";
import Card from "./Card";
import contacts from "../contacts";

var count = 0;
function createCard(contact) {
  return (
    <Card
      key={++count} /* name shoud be unique */
      name={contact.name}
      tel={contact.phone}
      email={contact.email}
      imgSrc={contact.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
