"use client"

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Table from "../Table/Table";

const supabase = createClientComponentClient();

export default async function DataDisplay(props){

  const [data, setData] = useState(props.data)

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