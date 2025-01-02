import Nav from './Nav'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'
import ResponsiveNavbar from './ResponsiveNavbar'

const Header = () => {
    useFeatherIcons()
  return (
    <header className='container flex justify-between items-center bg-white max-w-full px-3 shadow-xl z-50 fixed'>
      <div className='mx-3 max-tablet:mx-6 max-mobile:mx-1'>
        <a href="#" className='flex gap-4 '>
          <img className='w-16 max-tablet:w-12' src="/public/icon_navbar_brand.avif" alt="Brand Portfolio" />
           <p className='text-xl self-center font-extrabold font-Poppins max-tablet:text-sm'>Portofolio<span className='text-indigo-400 '>_Fauzan</span></p>
        </a>
        </div>
      <Nav>
        <a className='text-xl text-indigo-400  font-bold' href="#about">About</a>
        <a className='text-xl text-indigo-400  font-bold' href="#skill">Skill</a>
        <a className='text-xl text-indigo-400 font-bold' href="#project">Projects</a>
      </Nav>

     <ResponsiveNavbar />
      </header>
  )
}

export default Header