"use client"

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Table from "../Table/Table";

const supabase = createClientComponentClient();

export default function DataDisplay(props){

  const [schools, setSchools] = useState(props.data)

  useEffect(() => {
    setSchools(props.data)
  }, [props.data])

  useEffect(() => {
    const channel = supabase
      .channel('*')
      .on('supabase_realtime', { event: 'INSERT', schema: 'public', table: props.table }, (payload) =>
        setSchools((schools) => [...schools, payload.new])
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [props.data])

    const getHeadings = () => {
        return Object.keys(schools[0]);
      }
    
      try{
        return(
            <>
                <Table theadData={getHeadings()} tbodyData={schools}/>
            </>
        )
      }catch{
        return(
            <>
            </>
        )
      }
    
}