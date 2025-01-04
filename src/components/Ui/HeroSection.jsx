import PropTypes from 'prop-types'
import HeroImage from '../../assets/images/Img-Hero-Section/Hero_Section.avif'

const HeroSection = ({ children }) => {
  return (
    <div className="flex justify-around items-center min-h-screen w-full max-tablet:flex-col max-tablet:justify-evenly px-2">
      { children }
     <img className='w-2/5 max-tablet:w-10/12' src={HeroImage} alt="Fauzan" />
    </div>
  )
}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection
