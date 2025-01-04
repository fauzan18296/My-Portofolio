import PropTypes from 'prop-types'

const Links = ({ classname, href, children }) => {
  return (
    <a className={classname} href={href}>
    {children}
    </a>
  )
}

Links.propTypes = {
  classname: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Links
