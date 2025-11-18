import { Link } from 'react-router'
import NavigationIcon from '../Layouts/NavigationIcon'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'
import imageWebsiteProjects from '../../assets/images/Img-Projects-Section/Image_Website_Projects.avif'

const ProjectsSection = () => {
  useFeatherIcons()
  return (
    <div id="project" className="flex justify-center items-center flex-col scroll-mt-20 min-h-dvh">
      <h1 className="text-2xl text-white font-Poppins -tracking-tighter mb-2 font-bold text-center max-mobile:text-xl">My Projects</h1>
      <div className="container flex justify-center items-center">
        <div className='grid grid-cols-3 max-mobile:grid-cols-1  gap-6 mb-5'>
          <div className='flex justify-center items-center flex-col'>
              <img className='w-2/3 max-mobile:w-2/5 rounded-md object-contain mb-3' src={imageWebsiteProjects} />
          <Link to={'/websites/projects'}>
            <div className='flex justify-center items-center gap-2'>
              <NavigationIcon icon='link' /><h1 className='text-xl font-bold max-mobile:text-base'>Websites Projects</h1>
          </div>
          </Link>
          </div>
          <div className='flex justify-center items-center flex-col'>
              <img className='w-2/3 max-mobile:w-2/5 rounded-md object-contain mb-3' src={imageWebsiteProjects} />
          <Link to={'/websites/projects'}>
            <div className='flex justify-center items-center gap-2'>
              <NavigationIcon icon='link' /><h1 className='text-xl font-bold max-mobile:text-base'>Websites Projects</h1>
          </div>
          </Link>
          </div>
       </div>
      </div>
    </div>
  )
}
export default ProjectsSection