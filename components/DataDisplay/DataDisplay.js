import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Table from "../Table/Table";

const supabase = createServerComponentClient({ cookies });

export default async function DataDisplay(props){

  var result;

  if(props.dataName == "cleanitemview"){
    result = await supabase.from(props.dataName).select("Location, School, Garment, Colour, Size, Gender, Quantity");
  }else{
    result = await supabase.from(props.dataName).select();
  }

  const data = result.data;

    const getHeadings = () => {
        return Object.keys(data[0]);
      }
    
      try{
        return(
            <>
                <Table theadData={getHeadings()} tbodyData={data} skip={props.skip}/>
            </>
        )
      }catch{
        return(
            <>
            </>
        )
      }
    
}