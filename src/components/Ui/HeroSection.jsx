import PropTypes from 'prop-types'
import HeroImage from '../../assets/images/Img-Hero-Section/Hero_Section.avif'

const HeroSection = ({ children }) => {
  return (
    <div className="flex justify-evenly items-center min-h-dvh max-tablet:flex-col max-tablet:justify-evenly px-2">
      { children }
      <div className="[perspective:800px] w-full flex justify-around max-mobile:justify-center items-center">
        <img className='animate-rotateImg transition-all duration-75 delay-75 w-3/4 max-tablet:w-10/12' src={HeroImage} alt="Fauzan" />
        </div>
    </div>
  )
}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection
