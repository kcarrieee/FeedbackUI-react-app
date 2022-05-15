import Card from "./shared/Card"
import { useState,useEffect } from "react"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
    const [formInput, setformInput] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const {AddFeedback,feedbackEit,updateFeedback}= useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEit.edit === true){
            setbtnDisabled(false)
            setformInput(feedbackEit.item.text)
            setRating(feedbackEit.item.rating)
            


        }

    },[feedbackEit])

    function handleText(e){
        if (formInput === ''){
             setbtnDisabled(true)
             setMessage(null)
        }else if(formInput !== '' && formInput.trim().length<=10){
            setbtnDisabled(true)
             setMessage('need to type more then 10 characters')
        }else{
            setbtnDisabled(false)
             setMessage(null)
        }
        setformInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(formInput.trim().length> 10){
            const newFeedback = {
                text : formInput,
                rating 
            }

            if(feedbackEit.edit === true){
                updateFeedback(feedbackEit.item.id,newFeedback)
            }else{
             AddFeedback(newFeedback)
            }
            setformInput('')
            
        }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your expreience? </h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className="input-group">
                <input type="text" placeholder="add a review" onChange={handleText} value={formInput}/>
                <Button type='submit' isDisabled={btnDisabled} > Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm