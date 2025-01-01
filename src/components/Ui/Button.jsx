import PropTypes from 'prop-types'

const Button = (props) => {
  const { onClick = () => {}, type, children, classname} = props
  return (
    <button className={classname} onClick={onClick} type={type}>
      { children }
    </button>
  )
}

export default Button
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.object.isRequired
}
