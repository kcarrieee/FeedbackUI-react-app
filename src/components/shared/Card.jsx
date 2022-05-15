import PropTypes from 'prop-types' 

const Card = ({children, reverse}) => {
  return (
    <div className='card'
    style={{
      backgroundColor: reverse ? '#414141':'#fff',
      color: reverse ? '#fff':'#000',
    }}
    
    >{children}</div>
  )
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  // ) --- conditional class
}

Card.defaultProps = {
  reverse: false,

}

Card.propTypes ={
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card