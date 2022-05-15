import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider =({children}) =>{
    // const [isLoading, setisLoading] = useState(true);
    const [feedbackdata, setfeedbackdata] = useState(FeedbackData);

//     useEffect(() => {
//         FetchFeedbackData()
       
//     }, []);

//    const FetchFeedbackData = async() =>{
//        const response = await fetch("http://localhost:5000/feedback")
//        const data = await response.json()
//        setfeedbackdata(data)
//        setisLoading(false)
//    }

    const [feedbackEit, setfeedbackEit] = useState({
        item: {},
        edit: false
    });
    //edit feedback
    const editFeedback =(item)=>{
        setfeedbackEit({
        item,
        edit: true
        })

    }
    //update feedback
    const updateFeedback =(id,updatedItem)=>{
       setfeedbackdata(
           feedbackdata.map((item)=>(item.id === id ?{...item,...updatedItem} : item)
           
       ))
    }


    function deleteFeedback(id){
    setfeedbackdata(feedbackdata.filter(item => item.id !== id))
    //(retutning new array minus the one whos id is being passed in)

     }
    const AddFeedback=(newFeedback)=>{
    newFeedback.id = uuidv4() //generating rating
     setfeedbackdata([newFeedback,...feedbackdata])

     }
    return (<FeedbackContext.Provider
    value={{feedbackdata,deleteFeedback,AddFeedback,editFeedback,feedbackEit,updateFeedback}}
    >
        {children}
    </FeedbackContext.Provider>)

}
export default FeedbackContext