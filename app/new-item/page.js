import SchoolForm from "@/components/SchoolForm/SchoolForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function newItem(){

    const supabase = createServerComponentClient({ cookies });

    const { data: schools } = await supabase.from("schools").select();

    const { data: locations } = await supabase.from("locations").select();

    const { data: sizes } = await supabase.from("sizes").select();

    const { data: types } = await supabase.from("types").select();

    const { data: colours } = await supabase.from("colours").select();

    return(<>
        <SchoolForm schools={schools} locations={locations} sizes={sizes} colours={colours} types={types}/>
    </>)
}