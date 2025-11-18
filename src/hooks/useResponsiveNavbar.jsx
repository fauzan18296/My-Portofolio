import {  useState, useEffect  } from 'react'

export const useResponsiveNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  const handleNavigation = (event) => {
    if (!event.target.closest('.nav-container') && !event.target.closest('.icon-menu')) { 
      setOpenNav(false);
    }
  }

    useEffect(() => {
    document.addEventListener('click', handleNavigation)
    return () => document.removeEventListener("click", handleNavigation);
  },[])
  
  return {openNav, toggleNav}
}