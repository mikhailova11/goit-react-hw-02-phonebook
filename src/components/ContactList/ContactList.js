import React from "react";
import s from "./ContactList.module.css";

const ContactList = () => {
    return (
        <ul className={s.list}>
            <li className={s.item}>шаблон {}
                <button className={s.button} type="submit">Delete</button>
            </li>
        </ul>

    )
}

export default ContactList;