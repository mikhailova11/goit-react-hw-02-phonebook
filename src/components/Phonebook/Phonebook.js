import React from "react";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
// import s from "./Phonebook.module.css";

class Phonebook extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm  />

                <h2>Contacts</h2>
                <Filter  />
                <ContactList  />

            </div>
            
        )
    }

}

export default Phonebook;