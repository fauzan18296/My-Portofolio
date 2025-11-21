import { Link } from 'react-router'
import NavigationIcon from '../Layouts/NavigationIcon'
import { useFeatherIcons } from '../../hooks/config/icons/useIcon.config'
import { projectSection } from '../../databases/dummyDataProjectSection'

const ProjectsSection = () => {
  useFeatherIcons()
  return (
    <div id="project" className="flex justify-center items-center flex-col scroll-mt-20 min-h-dvh">
      <h1 className="text-2xl text-white font-Poppins -tracking-tighter mb-2 font-bold text-center max-mobile:text-xl">My Projects</h1>
      <div className="container flex justify-center items-center">
        <div className='grid grid-cols-3 max-mobile:grid-cols-1  gap-6 mb-5'>
          {
            projectSection.length > 0 && projectSection.map((project, index) => {
              return (
              <div key={index} className='flex justify-center items-center flex-col'>
              <img className='w-2/3 max-mobile:w-1/2 rounded-md object-contain mb-3' src={project.img} />
          <Link to={'/websites/projects'}>
            <div className='flex justify-center items-center gap-2'>
              <NavigationIcon classname='max-mobile:size-5' icon='link' /><h1 className='text-xl font-bold max-mobile:text-sm'>{project.title}</h1>
          </div>
          </Link>
          </div>
              )
            })
          }
       </div>
      </div>
    </div>
  )
}
export default ProjectsSection