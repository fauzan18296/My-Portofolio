import PropTypes from 'prop-types'

const Nav = ({ children }) => {
  return (
    <nav className="hidden md:flex md:gap-x-5 md:mx-auto md:items-center md:static font-Poppins">
    {children}
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
}

export default Nav