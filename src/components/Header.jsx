import PropTypes from 'prop-types' //impt 


const Header = ({text, bgColor, textColor}) => {
    const bgStyle={
        backgroundColor: bgColor,
        color: textColor
    }

  return (
    <header style={bgStyle}>
        <div className="container">
        <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: '#000000',
    textColor:'#ffffff'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,

}
//type checking for props



export default Header