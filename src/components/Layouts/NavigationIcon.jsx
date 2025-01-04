import PropTypes from 'prop-types'

const NavigationIcon = ({  icon, name, href, classname }) => {
  return (
    <div className="hidden md:flex bg-slate-600 p-1 mx-1  rounded-md">
      <a className={ classname } href={ href }>{name}<i className='size-4/5' data-feather={icon}></i></a>
      </div>
  )
}

NavigationIcon.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string,
  classname: PropTypes.string
}

export default NavigationIcon
