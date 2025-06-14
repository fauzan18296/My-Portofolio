import html from '/html-5.avif'
import css from '/css-3.avif'
import javascript from '/icons8-javascript-512.avif'
import tailwindcss from '/icons8-tailwind-css-512.avif'
import react from '/icons8-react-512.avif'
import git from '/icons8-git-512.avif'
const SkillsSection = () => {   
  return (
    <div id="skill" className="scroll-mt-20 min-h-dvh"> 
      <h1 className="text-2xl text-indigo-400 mb-1 font-bold text-center max-mobile:text-xl">My Skills</h1>
      <div className="container flex justify-center items-center">
        <div className='flex justify-center items-center flex-wrap'>
        <div className='flex justify-center items-center flex-col'>
          <img className='w-40' src={html} alt={html} />
          <h2 className='font-Poppins font-semibold text-xl tracking-wider max-mobile:text-base'>Html</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <img className='w-40' src={javascript} alt={javascript} />
          <h2 className='font-Poppins font-semibold text-xl tracking-wider max-mobile:text-base'>Javascript</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <img className='w-40' src={css} alt={css} />
          <h2 className='font-Poppins font-semibold text-xl tracking-wider max-mobile:text-base'>Css</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <img className='w-40' src={tailwindcss} alt={tailwindcss} />
          <h2 className='font-Poppins font-semibold text-xl tracking-wider max-mobile:text-base'>TailwindCss</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <img className='w-40' src={react} alt={react} />
          <h2 className='font-Poppins font-semibold text-xl tracking-wider max-mobile:text-base'>React</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <img className='w-40' src={git} alt={git} />
          <h2 className='font-Poppins font-semibold text-xl tracking-wider max-mobile:text-base'>Git</h2>
          </div>
          </div>
        </div>
      </div>
  )
}
export default SkillsSection
