import React from "react";
// import s from "./Phonebook.module.css";

class Phonebook extends React.Component {
    
    render() {
        return (
            <div>
                <h3>Phonebook</h3>
                <form>
                    <label>
                        Name
                        <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </label>
                    <label>
                        Number
                        <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                    </label>

                    <button type="submit">Add contact</button>
                </form>

                <h3>Contacts</h3>
                <label>
                        Find contacts by name
                        <input/>
                    </label>
                <ul>
                    <li>{}</li>
                    <button type="submit">Delete</button>
                </ul>
            </div>
            
        )
    }

}

export default Phonebook;