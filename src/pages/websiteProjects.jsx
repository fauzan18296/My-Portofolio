import { useState, useEffect } from 'react' 
import { websiteProject } from '../databases/dummyDataProjectCollection'
import { Link } from 'react-router'
import Nav from '../components/Layouts/Nav'
import NavigationIcon from '../components/Layouts/NavigationIcon'
import { useFeatherIcons } from '../hooks/config/icons/useIcon.config'

const websiteProjects = () => {
  const [totalProject, setTotalProject] = useState('')
  useFeatherIcons()

  useEffect(() => {
    setTotalProject(`Projects: ${websiteProject.length} Website`)
  }, [])

  return (
    <div className='min-h-dvh w-full'>
      <Nav>
        <div className='flex items-center mx-4 mt-4 text-2xl max-mobile:text-xl'>
        <Link to="/"> <NavigationIcon  classname={'flex mx-2 size-8 max-mobile:size-6'} icon={'arrow-left-circle'}/></Link>
          </div>
      </Nav>
      <div className='flex mt-24 justify-start'>
        <h1 className='text-2xl  text-indigo-400 font-bold mx-5 max-mobile:text-xl'>{totalProject}</h1>
      </div>
      <div className='container flex justify-center items-center'>
        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-3 gap-x-24 mx-5'>
            {
              websiteProject.length && websiteProject.map(project => {
                return (
                  <div className='mt-5' key={project.id}>
                    <img src={project.image} />
                    <h2 className='text-2xl max-mobile:text-xl font-semibold text-indigo-400'>{project.name}</h2>
                    <p className='text-base'><span className='text-base font-semibold'>Description: </span>{project.description}</p>
                    <div className='flex items-center text-base text-balance'>
                      <Link to={project.repository}><span className='text-base font-semibold'>Repository: </span>{project.repository}</Link>
                    </div>
                    <div className='flex items-center text-base text-balance'>
                      <Link to={project.demoWebsite}><span className='text-base font-semibold'>Demo: </span>{project.demoWebsite}</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
 }
 export default websiteProjects
