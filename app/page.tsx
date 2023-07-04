import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './logout-button'
import DataDisplay from '@/components/DataDisplay/DataDisplay';

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: itemData } = await supabase.from("clothingItems").select();

  return (
    <>
    <DataDisplay data={itemData} />
    </>
  )
}
