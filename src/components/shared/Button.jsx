import PropTypes from 'prop-types'

const Button = ({children, variant, type, isDisabled}) => {
  return (
    <button
     type={type} 
     disabled={isDisabled}
     className={`btn btn-${variant}`}
     >
        {children}
    </button>
  )
}

 Button.defaultProps={
     variant: 'primary',
     type: 'button',
     isDisabled: false
}

 Button.propTypes={
     children: PropTypes.node.isRequired,
     variant: PropTypes.string,
     isDisabled: PropTypes.bool
    }

export default Button