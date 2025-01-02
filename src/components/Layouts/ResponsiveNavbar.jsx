import { useResponsiveNavbar } from '../../hooks/useResponsiveNavbar'
import Button from '../Ui/Button'

const ResponsiveNavbar = () => {
  const { openNav, toggleNav } = useResponsiveNavbar()
  return (
    <>
      <div className={`${openNav ? "opacity-100" : "opacity-0"} md:hidden bg-white absolute w-1/2 min-h-screen top-full flex justify-evenly  items-center flex-col left-0 rounded-e-xl gap-2 transition-all ease-linear duration-150 delay-100 shadow-md`}>
 <a className='text-sm text-indigo-400 font-bold' href="#about">About</a>
      <a className='text-sm text-indigo-400 font-bold' href="#skill">Skill</a>
        <a className='text-sm text-indigo-400 font-bold' href="#project">Project</a>
      </div>
    <Button classname="text-indigo-400 md:hidden max-tablet:block cursor-pointer" type="button"  onClick={toggleNav}>
   <i className="size-9/12" data-feather="menu"></i>
      </Button>
      </>
  )
}

export default ResponsiveNavbar
