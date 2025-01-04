import PropTypes from 'prop-types'
import { useResponsiveNavbar } from '../../hooks/useResponsiveNavbar'
import Button from '../Ui/Button'

const Nav = ({ children }) => {
  const { openNav, toggleNav } = useResponsiveNavbar()
  console.log(openNav)
  return (
    <>
    <nav className="flex gap-x-5 mx-auto items-center font-Poppins
    ">
      <div className={`md:container md:flex md:justify-end md:items-center md:static md:mx-36 md:gap-10 max-tablet:flex max-tablet:flex-col top-full justify-evenly items-center max-tablet:h-screen max-tablet:w-3/6 bg-white rounded-e-xl absolute p-[1rem] ${!openNav ? "-left-full" : "left-0"} z-10 max-tablet:gap-2 max-tablet:shadow-xl nav-items transition-all duration-100 ease-in-out delay-75`}>
            {children}
    </div>
    </nav>
      <Button classname="text-indigo-400 md:hidden max-tablet:block cursor-pointer mx-2" type="button" onClick={ toggleNav }>
   <i className="size-9/12" data-feather="menu"></i>
      </Button>
      </>
  )
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
}

export default Nav