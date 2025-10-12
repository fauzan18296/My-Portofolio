import PropTypes from 'prop-types'
import Hero3d from '../../animation/3d/Hero3d'

const HeroSection = ({ children }) => {

  

  return (
    <div className="flex justify-evenly items-center min-h-dvh max-tablet:flex-col max-tablet:justify-evenly px-2">
      { children }
      <div className="w-full flex justify-evenly max-mobile:justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
        <Hero3d/>
        </div>
    </div>
  )
}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection
