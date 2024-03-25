import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import Groups2Icon from '@mui/icons-material/Groups2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Leftbar = () => {

    function useActive(path: string) {
      const location = useLocation();
      let isActive = location.pathname === path;
       return isActive ? 'text-blue-600' : '';
    }

  return (    
    <Sidebar className='fixed h-screen bg-white'>
    <div className='mx-10'>
      <div className='mt-30 py-10'>      
         
          <Card className='bg-slate-100 w-40px'>

            <CardHeader className='flex flex-row'>
              
              <Avatar className="">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              
              <div>
                <CardTitle className='base-semibold ml-1'>Dr Adetunji</CardTitle>
                <CardDescription className='ml-4'>Admin</CardDescription>
              </div>

            </CardHeader>
          
          </Card>  

      </div>
    </div>
      <Menu className=''>
        <div className='items-center py-30 mt-10'>
        <div className='px-4 text-gray-500'>Your Dashboard</div>
          <MenuItem component={<Link to="/" />} icon={<CalendarMonthIcon />} className={`hover:text-blue-600 ${useActive('/')}`}>Generate Timetable</MenuItem>
          <MenuItem component={<Link to="/ManageLecturers" />} icon={<PersonIcon />} className={`hover:text-blue-600 ${useActive('/ManageLecturers')}`}>Manage Lecturers</MenuItem>
          <MenuItem component={<Link to="/ManagePreferences" />} icon={<PersonIcon />} className={`hover:text-blue-600 ${useActive('/ManagePreferences')}`}>Manage Prefernces</MenuItem>
          <MenuItem component={<Link to="/ManageCourses" />} icon={<LibraryBooksIcon />} className={`hover:text-blue-600 ${useActive('/ManageCourses')}`}>Manage Courses</MenuItem>
          <MenuItem component={<Link to="/ManageClassGroups" />} icon={<PeopleIcon />} className={`hover:text-blue-600 ${useActive('/ManageClassGroups')}`}>Manage CLass Groups</MenuItem>
          <MenuItem component={<Link to="/ManageDepartments" />} icon={<Groups2Icon />} className={`hover:text-blue-600 ${useActive('/ManageDepartments')}`}>Manage Departments</MenuItem>
          <MenuItem component={<Link to="/ManageLectureHalls" />} icon={<HomeIcon />} className={`hover:text-blue-600 ${useActive('/ManageLectureHalls')}`}>Manage Lecture Halls</MenuItem>
          
          
        </div>
        
        <MenuItem component={<Link to="/SignedOut" />} icon={<LogoutIcon />} className='py-20 hover:text-blue-600'>Logout</MenuItem>
      </Menu>
    </Sidebar>
   
  )
}

export default Leftbar