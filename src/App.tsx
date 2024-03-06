import { Route, Routes } from 'react-router-dom';
import './globals.css'
import Signinform from './_auth/forms/signinform';
import Signupform from './_auth/forms/signupform';

import {  AddNewClassGroup, 
          AddNewCourse, 
          AddNewDepartment, 
          AddNewLectureHall, 
          AddNewLecturer, 
          Home, 
          ManageClassGroup, 
          ManageCourses, 
          ManageDepartment, 
          ManageLectureHalls, 
          TimeSettings } from './_root/pages';

import Authlayout from './_auth/authlayout';
import Rootlayout from './_root/rootlayout';
import {NextUIProvider} from "@nextui-org/react";
import ManageLecturers from './_root/pages/ManageLecturers';




function App() {

  return (
    
      <main className='flex h-screen'>

        <Routes>
          {/* public routes */}
          <Route element = {<Authlayout/>}>
          
            <Route path= "/sign-in" element = { <Signinform/> } />
            <Route path= "/sign-up" element = { <Signupform/> } />
          
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
            <Route path='/TimeSettings' element = { <TimeSettings/> }/>

          </Route>

        </Routes>
      </main>
   
  )
}

export default App
