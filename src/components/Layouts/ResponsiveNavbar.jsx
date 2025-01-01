import { useResponsiveNavbar } from '../../hooks/useResponsiveNavbar'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'
import Button from '../Ui/Button'

const ResponsiveNavbar = () => {
  const { openNav, toggleNav } = useResponsiveNavbar()
  useFeatherIcons()
  return (
    <>
       <div className={`${openNav ? "opacity-100" : "opacity-0"} md:hidden bg-white absolute w-2/4 min-h-screen top-full flex justify-around  items-center flex-col left-0 rounded-e-xl gap-2 transition-all ease-linear duration-150 delay-100 shadow-md`}>
 <a className='text-xl text-blue-500 font-bold' href="#about">About</a>
      <a className='text-xl text-blue-500 font-bold' href="#skill">Skill</a>
        <a className='text-xl text-blue-500 font-bold' href="#project">Project</a>
    </div>
    <Button classname="text-blue-500 md:hidden max-tablet:block" type="button"  onClick={toggleNav}>
   <i className="size-13" data-feather="menu"></i>
      </Button>
      </>
  )
}

export default ResponsiveNavbar
