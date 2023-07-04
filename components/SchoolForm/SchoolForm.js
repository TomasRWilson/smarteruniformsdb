"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import { useState } from "react";
import styles from "./SchoolForm.module.css";

const supabase = createClientComponentClient();

export default function SchoolForm(props) {

  const [formData, setFormData] = useState({
    type: "",
    colour: "",
    size: "",
    gender: "",
    school: "",
    location: "",
    quantity: 0,
  });

  console.log(formData);

  async function handleSubmit(event) {
    event.preventDefault();
    const { error } = await supabase
      .from("clothingItems")
      .insert({
        school: formData.school.id,
        location: formData.location.locId,
        type: formData.type.id,
        colour: formData.colour.id,
        size: formData.size.id,
        gender: formData.gender,
        quantity: formData.quantity
      });
    console.log(formData);
    console.log(error);
  }

  return (
    <>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
      <label>School</label>
      <DropdownList
          value={formData.school}
          dataKey="id"
          textField="name"
          onChange={(nextValue) =>
            setFormData({ ...formData, school: nextValue })
          }
          data={props.schools}
        />
        <label>Location of Item</label>
        <DropdownList
          value={formData.location}
          dataKey="id"
          textField="name"
          onChange={(nextValue) =>
            setFormData({ ...formData, location: nextValue })
          }
          data={props.locations}
        />
        <label>Item Type</label>
        <DropdownList
          value={formData.type}
          dataKey="id"
          textField="name"
          onChange={(nextValue) =>
            setFormData({ ...formData, type: nextValue })
          }
          data={props.types}
        />
        <label>Item Colour</label>
        <DropdownList
          value={formData.colour}
          dataKey="id"
          textField="colour"
          onChange={(nextValue) =>
            setFormData({ ...formData, colour: nextValue })
          }
          data={props.colours}
        />
        <label>Item Size</label>
        <DropdownList
          value={formData.size}
          dataKey="id"
          textField="name"
          groupBy="subsection"
          onChange={(nextValue) =>
            setFormData({ ...formData, size: nextValue })
          }
          data={props.sizes}
        />
        <label>Item Gender</label>
        <DropdownList
          value={formData.gender}
          onChange={(nextValue) =>
            setFormData({ ...formData, gender: nextValue })
          }
          data={["Boy", "Girl", "Unisex"]}
        />
        <label>Quantity</label>
        <input className={styles.formInput} type="number" onChange={(e) => (setFormData({...formData, quantity: e.target.value}))}/>
        <button className={styles.submitButton} type="submit">Add</button>
      </form>
      </div>
    </>
  );
}
