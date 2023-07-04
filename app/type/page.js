"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import styles from "./page.module.css";

const supabase = createClientComponentClient();

export default function Type() {

    const [value, setValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("types")
      .insert({ name: event.target.name.value });
    console.log(error);
    setValue("");
  }

  return (
    <>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>Clothing Type</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={value}
          onChange={(e) => (setValue(e.target.value))}
          placeholder="Clothing Type Name" />
        <button type="submit">Add Clothing Type</button>
      </form>
      </div>
    </>
  );
}