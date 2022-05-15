import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Feedbackitem = ({item}) => {
   const {deleteFeedback,editFeedback}= useContext(FeedbackContext)
    
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>deleteFeedback(item.id)}>
          <FaTimes color='black'/>
        </button>
        <button className='edit' onClick={()=>editFeedback(item)}>
          <FaEdit color='black'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}
 Feedbackitem.propTypes={
   item : PropTypes.object.isRequired
 }
export default Feedbackitem