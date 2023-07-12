"use client";

import Table from "../Table/Table";

export default async function OrderDisplay(props){

  const data = props.data;

    const getHeadings = () => {
        return Object.keys(data[0]);
      }
    
    return(
        <>
            <Table theadData={getHeadings()} tbodyData={data} skip={0}/>
        </>
    )
      
    
}