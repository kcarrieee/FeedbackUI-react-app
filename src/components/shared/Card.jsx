import PropTypes from 'prop-types' 

const Card = ({children, reverse}) => {
  return (
    <div className='card'
    style={{
      backgroundColor: reverse ? '#080808':'#fff',
      color: reverse ? '#fff':'#000',
    }}
    
    >{children}</div>
  )
 
}

Card.defaultProps = {
  reverse: false,

}

Card.propTypes ={
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card