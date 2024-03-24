import React from 'react';
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from 'react-router-dom';

import Leftbar from '@/components/shared/Leftbar';

const Rootlayout = () => {
  const isAuthenticated = false;
  const navigate = useNavigate();
  
  if(!isAuthenticated){
    navigate('/sign-in');
  }
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  

  return (
    <>
      <div className='w-screen flex'>
        <Leftbar/>
        <Toaster/>
          <main className=' bg-gray-100 w-full md:flex-grow px-10 h-screena'> 
            <Outlet/>
          </main> 
      </div>
    </>
  )
}

export default Rootlayout