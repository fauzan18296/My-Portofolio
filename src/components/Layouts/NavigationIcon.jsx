import PropTypes from 'prop-types'

const NavigationIcon = ({ classname ,icon, name}) => {
  return (
    <>
      {name}<i className={classname} data-feather={icon}></i>
      </>
  )
}

NavigationIcon.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  classname: PropTypes.string
}

export default NavigationIcon
