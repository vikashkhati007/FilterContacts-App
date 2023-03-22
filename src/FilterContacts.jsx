import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import ContactsData from "../src/components/Contacts.json";
export default function FilterContacts() {
  const uppercontainer = {
    textAlign: "center"
  };
  const Inputhandle = useRef(null);
  useEffect(() => {
    Inputhandle.current.focus();
  });

  const [searchContact, setSearchContact] = useState("");

  const filteredContacts = ContactsData.filter((contact) =>
    contact.first_name.toLowerCase().includes(searchContact.toLowerCase())
  );

  const inputStyle = {
    height: "20px",
    width: "12rem",
    padding: "2px 5px"
  };

  const title = {
    color: "white",
    fontSize: "3rem"
  };

  return (
    <div>
      <div style={uppercontainer}>
        <h1 className="title" style={title}>
          Filter Contacts App
        </h1>
        <input
          style={inputStyle}
          ref={Inputhandle}
          type="text"
          placeholder="Search"
          value={searchContact}
          onChange={(e) => {
            setSearchContact(e.target.value);
          }}
        />
      </div>
      <div>
        {filteredContacts.map((contact) => (
          <Card
            key={contact.id}
            name={contact.first_name}
            lastname={contact.last_name}
            email={contact.primary_email}
            phonenumber={contact.primary_phone}
          />
        ))}
      </div>
    </div>
  );
}
