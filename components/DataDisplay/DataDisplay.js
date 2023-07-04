import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Table from "../Table/Table";

const supabase = createServerComponentClient({ cookies });

export default async function DataDisplay(props){

  const { data: data } = await supabase.from(props.dataName).select();

    const getHeadings = () => {
        return Object.keys(data[0]);
      }
    
      try{
        return(
            <>
                <Table theadData={getHeadings()} tbodyData={data}/>
            </>
        )
      }catch{
        return(
            <>
            </>
        )
      }
    
}