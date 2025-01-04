import PropTypes from 'prop-types'
import Links from '../Ui/Links'

const NavigationIcon = ({  icon, name, url }) => {
  return (
    <div className="hidden md:flex bg-slate-600 p-1 mx-1  rounded-md">
      <Links classname='flex items-center rounded-md  text-white  font-bold' href={ url }>{name}<i className='size-4/5' data-feather={icon}></i></Links>
      </div>
  )
}

NavigationIcon.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.any
}

export default NavigationIcon
