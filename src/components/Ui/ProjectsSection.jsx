import { Link } from 'react-router'
import NavigationIcon from '../Layouts/NavigationIcon'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'

const ProjectsSection = () => {
  useFeatherIcons()
  return (
    <div id="project" className="scroll-mt-20 min-h-dvh">
      <h1 className="text-2xl text-indigo-400 mb-1 font-bold text-center max-mobile:text-lg">My Projects</h1>
      <div className="container flex justify-center items-center">
        <div className='flex justify-center items-center gap-5'>
          <div className='grid grid-cols-2'></div>
       <Link className='flex gap-2' to={'/websites/projects'}><NavigationIcon icon='link' /><h1 className='text-xl font-bold max-mobile:text-lg'> Websites Projects</h1></Link>
       <Link className='flex gap-2' to={'/websites/projects'}><NavigationIcon icon='link' /><h1 className='text-xl font-bold max-mobile:text-lg'>Websites Projects</h1></Link>
       <Link className='flex gap-2' to={'/websites/projects'}><NavigationIcon icon='link' /><h1 className='text-xl font-bold max-mobile:text-lg'>Websites Projects</h1></Link>
       </div>
      </div>
    </div>
  )
}
export default ProjectsSection