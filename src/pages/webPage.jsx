import Header from '../components/Layouts/Header'
import HeroSection from '../components/Ui/HeroSection'
import AboutSection from '../components/Ui/AboutSection'
import { Typewriter } from 'react-simple-typewriter'
import Links from '../components/Ui/Links'

const WebPage = () => {
  const Introduction = ["Ahmad Fauzan", "a Programmer", "a Fresh Graduates"]

  return (
    <>
      <Header />
      <HeroSection>
        <div className='mx-6 text-md py-10'>
          <h1 className='text-black text-xl max-tablet:text-lg'>Hello, I am <span className='text-indigo-400 font-bold'>
            <Typewriter
              words={Introduction}
              loop={false}
              cursor
              cursorStyle={"_"}
              cursorBlinking={"_"}
              delaySpeed={1000}
          /></span></h1>
          <p className='max-tablet:text-base text-balance tracking-wider'>On this website I will share information about my skills, about me, information about the website projects I have created in front-end development, and etc. Then i will work on my personal project and also will share it here as my portfolio.</p>
          <Links classname='font-Poppins font-semibold max-tablet:text-base tracking-widest flex justify-center items-center md:text-md relative w-28 bg-indigo-400 px-2 py-1  text-white rounded-md shadow-md mt-2 max-tablet:text-md hover:bg-indigo-500 focus:bg-indigo-500  active:bg-indigo-500' href='mailto:fauzan18296@gmail.com'>Hire Me!</Links>
        </div>
      </HeroSection>
      <AboutSection></AboutSection>
      </>
    )
}

export default WebPage
