import { Link } from 'react-router'
import NavigationIcon from '../Layouts/NavigationIcon'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'

const ProjectsSection = () => {
  useFeatherIcons()
  return (
    <div id="project" className="flex justify-center items-center flex-col scroll-mt-20 min-h-dvh w-full">
      <h1 className="text-2xl text-white font-Poppins -tracking-tighter mb-1 font-bold text-center max-mobile:text-xl">My Projects</h1>
      <div className="container flex justify-center items-center">
        <div className='grid grid-cols-3 max-mobile:grid-cols-2 gap-6 mb-5'>
          <Link to={'/websites/projects'}>
          <div className='flex justify-center items-center gap-2'>
              <NavigationIcon icon='link' /><h1 className='text-xl font-bold'>Websites Projects</h1>
          </div>
          </Link>
          <Link to={'/websites/projects'}>
          <div className='flex justify-center items-center gap-2'>
              <NavigationIcon icon='link' /><h1 className='text-xl font-bold'>Websites Projects</h1>
          </div>
          </Link>
          <Link to={'/websites/projects'}>
          <div className='flex justify-center items-center gap-2'>
              <NavigationIcon icon='link' /><h1 className='text-xl font-bold'>Websites Projects</h1>
            </div>
          </Link>
       </div>
      </div>
    </div>
  )
}
export default ProjectsSection