"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./SizeForm.module.css";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import { useState } from "react";

const supabase = createClientComponentClient();

export default function SizeForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: ""
  })

  console.log(formData.name);

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("sizes")
      .insert({
        name: formData.name,
        subsection: formData.category,
      });
    console.log(error);
    setFormData({name: "", category: ""});
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
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <label>Size Category</label>
          <DropdownList
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e})}
            data={["General", "Age", "Inches", "Centimeters"]}
          />
          <div className={styles.AddButton}>
            <button type="submit">Add Size</button>
          </div>
        </form>
      </div>
    </>
  );
}