import {  useState  } from 'react'

export const useResponsiveNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav)
  }
  return {openNav, toggleNav}
}