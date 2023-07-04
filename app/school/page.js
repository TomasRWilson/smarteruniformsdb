"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import styles from "./page.module.css";
import DataDisplay from "@/components/DataDisplay/DataDisplay";

export const revalidate = 0;

const supabase = createClientComponentClient();

export default async function School() {

  const { data: schools } = await supabase.from("schools").select();

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
        <input 
        className={styles.formInput}
          id="name" 
          name="name" 
          type="text" 
          placeholder="School Name" />
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
      <DataDisplay table={"schools"} data={schools}/>
    </>
  );
}