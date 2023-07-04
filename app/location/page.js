import LocationForm from "@/components/LocationForm/LocationForm";
import DataDisplay from '@/components/DataDisplay/DataDisplay';

export default function Location() {

  return (
    <>
      <LocationForm />
      <DataDisplay dataName="locations" skip={1}/>
    </>
  );
}