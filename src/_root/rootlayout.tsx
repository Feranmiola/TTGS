import Leftbar from '@/components/shared/Leftbar'
import StudentLeftbar from '@/components/shared/StudentLeftbar';
import { Outlet } from 'react-router-dom'
import LecturerLeftbar from '@/components/shared/LecturerLeftbar';
import { Toaster } from "@/components/ui/toaster";

const Rootlayout = () => {
  
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
   <main className='w-full md:flex'> 
   {user.userType === 'admin' ? (
      <Leftbar/>      
    ) : user.userType === 'student' ? (
      <StudentLeftbar/>
    ) : (
      <LecturerLeftbar/>
    )}
    <Toaster/>
    <Outlet/>
  </main> 
  )
}

export default Rootlayout