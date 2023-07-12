import RequestForm from "@/components/RequestForm/RequestForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function Form(){

    const supabase = createServerComponentClient({ cookies });

    const { data: schools } = await supabase.from("schools").select().order('name');

    const { data: sizes } = await supabase.from("sizes").select().order('name');

    const { data: types } = await supabase.from("types").select().order('name');

    const { data: colours } = await supabase.from("colours").select().order('colour');

    return(<>
        <RequestForm schools={schools} sizes={sizes} colours={colours} types={types}/>
    </>)
}