import PropTypes from 'prop-types'

<<<<<<< HEAD
const NavigationIcon = ({ classname, icon, name, href }) => {
  return (
    <div className="hidden md:flex bg-slate-600 p-1 mx-1  rounded-md">
      <a className={classname} href={href}>{name}<i className='size-4/5' data-feather={icon}></i></a>
      </div>
=======

const NavigationIcon = ({ classname ,icon, name}) => {
  return (
    <>
      {name}<i className={classname} data-feather={icon}></i>
      </>
>>>>>>> f0b092300f5f2f91531faea73f5ddcbec25acd93
  )
}

NavigationIcon.propTypes = {
<<<<<<< HEAD
  classname: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.any
=======
  icon: PropTypes.string,
  name: PropTypes.string,
  classname: PropTypes.string
>>>>>>> f0b092300f5f2f91531faea73f5ddcbec25acd93
}

export default NavigationIcon
