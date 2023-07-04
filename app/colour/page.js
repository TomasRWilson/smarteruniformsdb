import ColourForm from "@/components/ColourForm/ColourForm";
import DataDisplay from "@/components/DataDisplay/DataDisplay";

export default function Colour() {

  return (
    <>
    <ColourForm />
    <DataDisplay dataName="colours" skip={1}/>
    </>
  );
}