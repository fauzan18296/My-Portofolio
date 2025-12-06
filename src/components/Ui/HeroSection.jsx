import PropTypes from 'prop-types'
<<<<<<< HEAD
import HeroImage from '../../assets/images/Img-Hero-Section/Hero_Section.avif'

const HeroSection = ({ children }) => {
  return (
    <div className="flex justify-around items-center min-h-screen w-full max-tablet:flex-col max-tablet:justify-evenly px-2">
      { children }
     <img className='w-2/5 max-tablet:w-10/12' src={HeroImage} alt="Fauzan" />
=======
import Hero3d from '../../animation/3d/Hero3d'

const HeroSection = ({ children }) => {
  return (
    <div className="flex justify-evenly items-center min-h-dvh max-tablet:flex-col max-tablet:justify-evenly px-2">
      { children }
      <div className="w-full flex justify-evenly max-mobile:justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
        <Hero3d />
        </div>
>>>>>>> f0b092300f5f2f91531faea73f5ddcbec25acd93
    </div>
  )
}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection
