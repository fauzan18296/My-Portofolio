import PropTypes from 'prop-types'

const Nav = ({ children }) => {
  return (
    <nav className="flex gap-x-5 mx-auto items-center font-semibold
    ">
            {children}
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
}

export default Nav