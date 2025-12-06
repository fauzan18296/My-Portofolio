import PropTypes from 'prop-types'

const Nav = ({ children }) => {
  return (
<<<<<<< HEAD
    <nav className="hidden md:flex md:gap-x-5 md:mx-auto md:items-center md:static font-Poppins">
    {children}
=======
    <nav className="flex gap-x-5 mx-auto items-center font-semibold
    ">
            {children}
>>>>>>> f0b092300f5f2f91531faea73f5ddcbec25acd93
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
}

export default Nav