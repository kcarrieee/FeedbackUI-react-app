import  Feedbackitem from"./Feedbackitem";
// import Spinner from "./shared/Spinner";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = () => {
    const { feedbackdata }= useContext(FeedbackContext)
    if(!feedbackdata || feedbackdata.length === 0){
        return <p>No feedback yet</p>
    }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackdata.map(item =>{
            return (
            <motion.div  
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Feedbackitem 
            key={item.id} 
            item={item}
            
            />
            </motion.div>
            )
        })}
        </AnimatePresence>
        
    </div>
  )
}


export default FeedbackList