import { useState, useEffect } from 'react' 
import { websiteProject } from '../databases/dummyDataProjectCollection'

const websiteProjects = () => {
  const [totalProject, setTotalProject] = useState('')

  console.log(websiteProject.length);
  
  useEffect(() => {
    setTotalProject(`Projects: ${websiteProject.length} Website`)
  }, [])

  return (
    <div className='min-h-dvh w-full'>
      <div className='flex mt-24 justify-start'>
        <h1 className='text-2xl  text-indigo-400 font-bold mx-5 max-mobile:text-xl'>{totalProject}</h1>
        </div>
    </div>
  )
 }
 export default websiteProjects
