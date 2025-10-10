import PropTypes from 'prop-types'
import HeroImage from '../../assets/images/Img-Hero-Section/Hero_Section.avif'

const HeroSection = ({ children }) => {
  return (
    <div className="flex justify-evenly items-center min-h-dvh w-full md:max-w-screen-xl max-w-screen-sm max-tablet:flex-col max-tablet:justify-evenly px-2">
      { children }
     <img className='w-2/4 animate-rotateImg transition-all duration-75 delay-75 max-tablet:w-10/12 ' src={HeroImage} alt="Fauzan" />
    </div>
  )
}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection
