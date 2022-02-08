import React from "react";
import s from "./Filter.module.css";

const Filter = () => {
    return (
        <label className={s.label}>
        Find contacts by name
        <input className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        />
        </label>

    )
}

export default Filter;