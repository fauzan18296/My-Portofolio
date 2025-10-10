import Nav from './Nav'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'
import { useResponsiveNavbar } from '../../hooks/useResponsiveNavbar'
import Button from '../Ui/Button'
import Links from '../Ui/Links'
import NavigationIcon from './NavigationIcon'

const Header = () => {
  const { openNav, toggleNav, handleNavigation } = useResponsiveNavbar()
  useFeatherIcons()
  document.addEventListener('click', handleNavigation)

  return (
    <header id='nav-container' className='flex justify-between items-center bg-neutral-800 w-full px-3 shadow-xl z-50 fixed'>
      <div className='mx-3 max-tablet:mx-6 max-mobile:mx-1'>
        <a href="#" className='flex gap-4'>
          <img className='w-16 max-tablet:w-12 max-mobile:w-10' src="/icon_navbar_brand.avif" alt="Brand Portfolio" />
           <p className='text-2xl font-extrabold font-Gloria  self-center max-tablet:text-lg'>Zan<span className='text-indigo-300 '>_Dev</span></p>
        </a>
        </div>
      <Nav>
          <div className={`md:container md:flex md:justify-end md:items-center md:static md:gap-10 max-tablet:flex max-tablet:flex-col top-full justify-evenly items-center max-tablet:h-dvh max-tablet:w-8/12 bg-neutral-800 rounded-e-xl absolute p-[1rem] ${!openNav ? "-left-full" : "left-0"} z-10 max-tablet:gap-2 max-tablet:shadow-xl max-tablet:text-base transition-all duration-100 ease-in-out delay-75`}>
          <a className='text-lg font-semibold  text-white hover:text-indigo-300 hover:border-b-4 hover:border-b-indigo-300 hover:rounded-sm   focus:text-indigo-300 focus:border-b-4 focus:border-b-indigo-300 focus:rounded-sm transition-all  ease-in-out' href="#about">About</a>
        <a className='text-lg font-semibold  text-white hover:text-indigo-300 hover:border-b-4 hover:border-b-indigo-300 hover:rounded-sm   focus:text-indigo-300 focus:border-b-4 focus:border-b-indigo-300 focus:rounded-sm 
         transition-all ease-in-out' href="#skill">Skill</a>
          <a  className='text-lg font-semibold  text-white hover:text-indigo-300 hover:border-b-4 hover:border-b-indigo-300 hover:rounded-sm   focus:text-indigo-300 focus:border-b-4 focus:border-b-indigo-300 focus:rounded-sm 
         transition-all ease-in-out' href="#project">Projects</a>
          <div className='flex gap-x-2 font-Poppins '>
          <Links classname="flex max-tablet:text-base bg-slate-600  p-1  rounded-md  text-white  font-bold"  href='https://github.com/fauzan18296'><NavigationIcon classname="size-5 max-mobile:size-4 ms-1" name="Github" icon="github" /></Links>
            <Links classname="flex max-mobile:text-md  bg-slate-600  p-1  rounded-md  text-white max-tablet:text-base  font-bold" href='https://www.instagram.com/ahd_fauzan18/?hl=id'><NavigationIcon classname="size-5 max-mobile:size-4 ms-1" name="Instagram" icon="instagram" /></Links>
            </div>
        </div>
      </Nav>
        <Button classname="text-indigo-400 md:hidden max-tablet:block cursor-pointer mx-2" type="button" onClick={ toggleNav }>
   <i id='icon-menu' className="size-9/12" data-feather="menu"></i>
      </Button>
    </header>
  )
}

export default Header
