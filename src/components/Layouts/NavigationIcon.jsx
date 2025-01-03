import PropTypes from 'prop-types'

const NavigationIcon = ({ classname, icon, name, href }) => {
  return (
    <div className="hidden md:flex bg-slate-600 p-1 mx-1  rounded-md">
      <a className={classname} href={href}>{name}<i className='size-4/5' data-feather={icon}></i></a>
      </div>
  )
}

NavigationIcon.propTypes = {
  classname: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.any
}

export default NavigationIcon
