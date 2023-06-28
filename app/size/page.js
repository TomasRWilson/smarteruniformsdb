"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./page.module.css";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import { useState } from "react";
import DataDisplay from "@/components/DataDisplay/DataDisplay";

const supabase = createClientComponentClient();

export default async function Size() {
  const [category, setCategory] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("sizes")
      .insert({
        name: event.target.name.value,
        subsection: event.target.address.value,
      });
    console.log(error);
  }

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label>Size Value</label>
          <input
            className={styles.formInput}
            id="name"
            name="name"
            type="text"
            placeholder="Item Value"
          />
          <label>Size Category</label>
          <DropdownList
            value={category}
            onChange={(nextValue) =>
                setCategory(nextValue)
              }
            data={["General", "Age", "Inches", "Centimeters"]}
          />
          <div className={styles.AddButton}>
            <button type="submit">Add School</button>
          </div>
        </form>
      </div>
    </>
  );
}
