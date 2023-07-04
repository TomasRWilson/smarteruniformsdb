import DataDisplay from "@/components/DataDisplay/DataDisplay";
import SchoolsForm from "@/components/SchoolsForm/SchoolsForm";

export default function School() {

  return (
    <>
      <SchoolsForm />
      <DataDisplay dataName="schools" skip={1}/>
    </>
  );
}