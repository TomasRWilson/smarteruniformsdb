"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import { useState } from "react";
import OrderDisplay from "@/components/OrderDisplay/OrderDisplay";
import styles from "./RequestForm.module.css";

const supabase = createClientComponentClient();

export default function RequestForm(props) {

    const [school, setSchool] = useState();

  const [formData, setFormData] = useState({
    type: "",
    colour: "",
    size: "",
    gender: "",
    branded: false,
    quantity: 0
  });

  const [formArray, setFormArray] = useState([]);

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    setFormArray([...formArray, formData]);
    setFormData({
        type: "",
        colour: "",
        size: "",
        gender: "",
        branded: "",
        quantity: 0
      });
    console.log(formArray);
  }

  return (
    <>
    <div className={styles.formContainer}>
        <label>School</label>
      <DropdownList
          value={school}
          dataKey="id"
          textField="name"
          onChange={(nextValue) =>
            setSchool(nextValue)
          }
          data={props.schools}
        />
    </div>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>Branded?</label>
        <input type="checkbox" value={formData.branded} onChange={(e) => {
            let tempBranded = formData.branded;
            setFormData({...formData, branded: !tempBranded})
            }}></input>
        <label>Garment Type</label>
        <DropdownList
          value={formData.type}
          dataKey="id"
          textField="name"
          onChange={(nextValue) =>
            setFormData({ ...formData, type: nextValue })
          }
          data={props.types}
        />
        <label>Garment Colour</label>
        <DropdownList
          value={formData.colour}
          dataKey="id"
          textField="colour"
          onChange={(nextValue) =>
            setFormData({ ...formData, colour: nextValue })
          }
          data={props.colours}
        />
        <label>Garment Size</label>
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
        <label>Garment Gender</label>
        <DropdownList
          value={formData.gender}
          onChange={(nextValue) =>
            setFormData({ ...formData, gender: nextValue })
          }
          data={["Boy", "Girl", "Unisex"]}
        />
        <label>Quantity Required</label>
        <input className={styles.formInput} type="number" onChange={(e) => (setFormData({...formData, quantity: e.target.value}))}/>
        <div className={styles.buttonContainer}>
            <button className={styles.submitButton} type="submit">Add</button>
        </div>
      </form>
      </div>
      <h2>Current Order</h2>
      { formArray.length > 0 ? <OrderDisplay data="RequestForm"/> : <></>}
    </>
  );
}
