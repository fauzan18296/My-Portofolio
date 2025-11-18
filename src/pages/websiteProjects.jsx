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
    <div className=' bg-neutral-800 text-white flex-col min-h-dvh w-full'>
      <Nav>
        <div className='flex justify-start items-center ms-5 mt-10 text-2xl max-mobile:text-xl'>
        <Link to="/"> <NavigationIcon  classname={'flex mx-2 size-8 max-mobile:size-6'} icon={'arrow-left-circle'}/></Link>
          </div>
      </Nav>
      <div className='flex mt-24 justify-start items-center'>
        <h1 className='text-2xl  text-indigo-300 font-bold mx-5 max-mobile:text-xl'>{totalProject}</h1>
      </div>
      <div className='container flex justify-center items-center mx-auto'>
        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-3 max-mobile:grid-cols-1 gap-x-24 mx-5'>
            {
              websiteProject.length > 0 && websiteProject.map(project => {
                return (
                  <div className='mt-5' key={project.id}>
                    <img src={project.image} />
                    <h2 className='text-2xl max-mobile:text-xl font-semibold mt-3 max-mobile:mt-2 text-indigo-300'>{project.name}</h2>
                    <p className='text-base'><span className='text-base font-semibold'>Description: </span>{project.description}</p>
                    <div className='flex justify-center items-center gap-2 max-mobile:mt-3'>
                      <Link to={project.repository}><NavigationIcon classname="size-7 max-mobile:size-5 mx-auto" icon="github" />
                     </Link>
                      <Link to={project.demoWebsite}> 
                      <NavigationIcon classname="size-7 max-mobile:size-5 mx-auto" icon="globe" />
                      </Link>
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
