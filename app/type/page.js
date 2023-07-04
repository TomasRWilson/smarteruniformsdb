import TypeForm from "@/components/TypeForm/TypeForm";
import DataDisplay from "@/components/DataDisplay/DataDisplay";

export default function Type() {

  return (
    <>
    <TypeForm />
    <DataDisplay dataName="types" skip={1}/>
    </>
  );
}