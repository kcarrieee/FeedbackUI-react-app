import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
    const {feedbackdata}= useContext(FeedbackContext)

    let averageRating = feedbackdata.reduce((acc , cur)=>{
        return acc + cur.rating 
    },0) /feedbackdata.length
    averageRating = averageRating.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h4>{feedbackdata.length} Reviews</h4>
        <h4>Average rating: {isNaN(averageRating) ? 0 : averageRating }</h4>
    </div>
  )
}


export default FeedbackStats