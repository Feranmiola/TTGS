import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import './globals.css'
import Signinform from './_auth/forms/signinform';
import Signupform from './_auth/forms/signupform';
import AdminSignIn from './_auth/forms/adminSignIn';


import {  AddNewClassGroup, 
          AddNewCourse, 
          AddNewDepartment, 
          AddNewLectureHall, 
          AddNewLecturer, 
          Home, 
          LecturerHome, 
          ManageClassGroup, 
          ManageCourses, 
          ManageDepartment, 
          ManageLectureHalls, 
          StudentHome, } from './_root/pages';

import Authlayout from './_auth/authlayout';
import Rootlayout from './_root/rootlayout';
import ManageLecturers from './_root/pages/Admin Pages/ManageLecturers';
import SignedOut from './_auth/forms/SignedOut';
import { Toaster } from "@/components/ui/toaster";



function App() {

  return (
    <NextUIProvider>
      <ChakraProvider>
        <main className='flex h-screen'>
          <Toaster/>
          <Routes>
            {/* public routes */}
            <Route element = {<Authlayout/>}>
            
              <Route path= "/sign-in" element = { <Signinform/> } />
              <Route path= "/sign-up" element = { <Signupform/> } />
              <Route path= "/adminSign-in" element = { <AdminSignIn/> } />
              <Route path='/SignedOut' element = { <SignedOut/> }/>
            
            </Route>

            {/* private routes */}

            <Route element = {<Rootlayout/>}>

              <Route index element = { <Home/> }/>
              
              <Route path='/ManageLecturers' element = { <ManageLecturers/> }/>
              <Route path='/ManageCourses' element = { <ManageCourses/> }/>
              <Route path='/ManageDepartments' element = { <ManageDepartment/> }/>
              <Route path='/ManageLectureHalls' element = { <ManageLectureHalls/> }/>
              <Route path='/ManageClassGroups' element = { <ManageClassGroup/> }/>

              <Route path='/AddNewLecturer' element = { <AddNewLecturer/> }/>
              <Route path='/AddNewCourse' element = { <AddNewCourse/> }/>
              <Route path='/AddNewDepartment' element = { <AddNewDepartment/> }/>
              <Route path='/AddNewLectureHalls' element = { <AddNewLectureHall/> }/>
              <Route path='/AddNewClassGroups' element = { <AddNewClassGroup/> }/>
              
              <Route path='/StudentHome' element = { <StudentHome/> }/>
              <Route path='/LecturerHome' element = { <LecturerHome/> }/>


            </Route>

          </Routes>
        </main>
        </ChakraProvider>
      </NextUIProvider>
   
  )
}

export default App
