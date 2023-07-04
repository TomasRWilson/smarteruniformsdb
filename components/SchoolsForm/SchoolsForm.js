"use client"

import styles from "./page.module.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function SchoolsForm() {

  const supabase = createClientComponentClient();

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("schools")
      .insert({ name: event.target.name.value, location: event.target.address.value });
    console.log(error);
  }

  return (
    <>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>School Name</label>
        <input 
        className={styles.formInput}
          id="name" 
          name="name" 
          type="text" 
          placeholder="School Name" />
          <label>School Address</label>
        <input
        className={styles.formInput}
          id="address"
          name="address"
          type="text"
          placeholder="School Address"
        />
        <button className={styles.AddButton} type="submit">Add School</button>
      </form>
      </div>
    </>
  );
}