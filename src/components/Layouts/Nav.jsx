import PropTypes from 'prop-types'
import React  from 'react'


const Nav = React.forwardRef(({ children }, ref) => {
  return (
    <nav ref={ref} className="hidden md:flex md:gap-3 md:mx-auto md:items-center md:static font-Poppins">
    {children}
    </nav>
  )
})

Nav.displayName = "NavigationMenu"

Nav.propTypes = {
  children: PropTypes.node.isRequired
}

export default Nav