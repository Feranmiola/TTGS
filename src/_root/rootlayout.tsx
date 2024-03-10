import Bottombar from '@/components/shared/Bottombar'
import Leftbar from '@/components/shared/Leftbar'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster";

const Rootlayout = () => {
  return (
    <div className='w-full md:flex'>
      
      <Topbar/>
      
      <Leftbar/>
      <Toaster/>

      <section className='flex flex-1 h-full'>
        <Outlet/>
      </section>

      <Bottombar/>
    </div>
  )
}

export default Rootlayout