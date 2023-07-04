"use client";
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import styles from "./page.module.css";

const supabase = createClientComponentClient();

export default function LocationForm() {

    const [location, setLocation] = useState({
      name: "",
      address: ""
    });

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("locations")
      .insert({ name: event.target.name.value, location: event.target.address.value });
    console.log(error);
    setLocation({name: "", address: ""});
  }

  return (
    <>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>Location Name</label>
        <input id="name" name="name" value={location.name} type="text" placeholder="Location Name" onChange={(e) => setLocation({...location, name: e.target.value})}/>
        <label>Location Address</label>
        <input
          id="address"
          value={location.address}
          name="address"
          type="text"
          placeholder="Location Address"
          onChange={(e) => setLocation({...location, address: e.target.value})}
        />
        <button type="submit">Add Location</button>
      </form>
      </div>
    </>
  );
}