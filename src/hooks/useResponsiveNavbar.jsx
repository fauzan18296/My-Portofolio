import {  useState  } from 'react'

export const useResponsiveNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  const handelNavigation = (event) => {
    if (!event.target.closest('#nav-container') && !event.target.closest('#icon-menu')) { 
      setOpenNav(false);
    }
  }
  
  return {openNav, toggleNav, handelNavigation}
}