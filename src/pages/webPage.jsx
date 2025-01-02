import Header from '../components/Layouts/Header'
import HeroSection from '../components/Ui/HeroSection'
import { Typewriter } from 'react-simple-typewriter'

const WebPage = () => {
  const Introduction = [ "Ahmad Fauzan", "a Programmer", "a Fresh Graduates" ]
  return (
    <>
    <Header />
      <HeroSection>
        <div className='mx-6 text-md'>
          <h1 className='text-black text-xl max-tablet:text-xl'>Hello, I am <span className='text-indigo-400'>
            <Typewriter
              words={Introduction}
              loop={false}
              cursor
              cursorStyle={"_"}
              cursorBlinking={"_"}
              delaySpeed={1000}
          /></span></h1>
          <p>On this website I will share information about my skills, about me, information about the website projects I have created in front-end development, and etc.</p>
          </div>
      </HeroSection>
      </>
    )
}

export default WebPage
