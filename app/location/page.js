"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import styles from './page.module.css';

const supabase = createClientComponentClient();

export default function Location() {
  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("locations")
      .insert({ name: event.target.name.value, location: event.target.address.value });
    console.log(error);
  }

  return (
    <>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input id="name" name="name" type="text" placeholder="Location Name" />
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Location Address"
        />
        <button type="submit">Add Location</button>
      </form>
      </div>
    </>
  );
}