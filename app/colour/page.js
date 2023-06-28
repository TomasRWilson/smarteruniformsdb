"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import styles from "./page.module.css";

const supabase = createClientComponentClient();

export default function Colour() {

    const [value, setValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("colours")
      .insert({ colour: event.target.name.value });
    console.log(error);
    setValue("");
  }

  return (
    <>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={value}
          onChange={(e) => (setValue(e.target.value))}
          placeholder="Colour Name" />
        <button type="submit">Add Colour</button>
      </form>
      </div>
    </>
  );
}