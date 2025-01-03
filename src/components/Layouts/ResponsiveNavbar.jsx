import { useResponsiveNavbar } from '../../hooks/useResponsiveNavbar'
import Button from '../Ui/Button'

const ResponsiveNavbar = () => {
  const { openNav, toggleNav } = useResponsiveNavbar()
  return (
    <>
      <div className={`${openNav ? "opacity-100" : "opacity-0"} md:hidden bg-white absolute w-2/4 h-svh top-full flex justify-evenly items-center flex-col left-0 rounded-e-xl transition ease-in-out duration-150 delay-100 shadow-md`}>
 <a className='text-md text-indigo-400 font-bold' href="#about">About</a>
      <a className='text-md text-indigo-400 font-bold' href="#skill">Skill</a>
        <a className='text-md text-indigo-400 font-bold' href="#project">Project</a>
        <span className='flex justify-center items-center'>
        <a className="bg-slate-600 p-1 mx-1 flex items-center rounded-md text-white font-bold text-sm" href="https://github.com/fauzan18296">Github<i className='size-4/5' data-feather="github"></i></a>
          <a className="bg-slate-600 p-1 mx-1 items-center rounded-md text-white flex font-bold text-sm" href="https://www.instagram.com/ahd_fauzan18/">Instagram<i className='size-4/5' data-feather="instagram"></i></a>
          </span>
      </div>
    <Button classname="text-indigo-400 md:hidden max-tablet:block cursor-pointer" type="button"  onClick={toggleNav}>
   <i className="size-9/12" data-feather="menu"></i>
      </Button>
      </>
  )
}

export default ResponsiveNavbar
