import React from 'react';
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from 'react-router-dom';

import Leftbar from '@/components/shared/Leftbar';
import LecturerLeftbar from '@/components/shared/LecturerLeftbar';
import StudentLeftbar from '@/components/shared/StudentLeftbar';

const Rootlayout = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();
  
  if(!isAuthenticated){
    navigate('/sign-in');
  }
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  
  let LeftbarComponent;
  if (user.userType === 'student') {
    LeftbarComponent = StudentLeftbar;
  } else if (user.userType === 'lecturer') {
    LeftbarComponent = LecturerLeftbar;
  } else {
    LeftbarComponent = Leftbar;
  }

  LeftbarComponent = Leftbar;
  
  

  return (
    <>
      <div className='w-screen flex'>
        <LeftbarComponent/>
        <Toaster/>
          <main className=' bg-gray-100 w-full md:flex-grow px-10 h-screena'> 
            <Outlet/>
          </main> 
      </div>
    </>
  )
}

export default Rootlayout