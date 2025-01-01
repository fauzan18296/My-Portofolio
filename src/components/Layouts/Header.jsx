import  Nav from './Nav'
import ResponsiveNavbar from './ResponsiveNavbar'

const Header = () => {
  return (
    <header className='container flex justify-between items-center bg-white max-w-full px-5 shadow-xl relative z-50'>
      <div className='mx-10 max-tablet:mx-6 max-mobile:mx-1'>
        <a href="#" className='flex gap-4 '>
          <img className='w-16 max-tablet:w-12' src="/public/icon_navbar_brand.avif" alt="Brand Portfolio" />
           <p className='text-2xl self-center font-extrabold font-Poppins max-tablet:text-sm'>Portfolio<span className='text-blue-500'>_Fauzan</span></p>
        </a>
        </div>
      <Nav>
      <a className='text-xl text-blue-500 font-bold' href="#about">About</a>
      <a className='text-xl text-blue-500 font-bold' href="#skill">Skill</a>
        <a className='text-xl text-blue-500 font-bold' href="#project">Project</a>
      </Nav>
     <ResponsiveNavbar />
      </header>
  )
}

export default Header