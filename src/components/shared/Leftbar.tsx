import { sidebarLinks } from '@/constants'
import { INavLink } from '@/types'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

const Leftbar = () => {

    const {pathname} = useLocation();
  return (    
    <nav className='leftsidebar bg-white'>
        
        <div className='flex flex-col'>
            
            
            <ul className='flex flex-col pt-40'>
            
            <p className='text-light-4'>Your Dashboard</p>
            
                {sidebarLinks.map((link: INavLink) => {

                    const isActive = pathname ===  link.route

                    return(
                        <li key={link.label} className={"leftsidebar-link"}>
                            
                            <NavLink to={link.route}
                            
                            className="flex gap-4 items-center ">

                                <img
                                src={link.imgURL}
                                alt={link.label}
                                className='group-hover: invert-white'/>

                                {link.label}
                                
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className='flex gap-4'>
                <Button variant="ghost" className='shad-button_ghost'>
                    <img
                    src='/assets/icons/logout.svg'
                    alt='logout'/>
                    <p className='small-medium lg: base-medium'>Logout</p>
                </Button>
                
                
            </div>
    </nav>
    
  )
}

export default Leftbar