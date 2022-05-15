
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./pages/About";
import {FeedbackProvider} from './context/FeedbackContext'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import AboutIcon from "./components/AboutIcon";



function App() {
  
  
 
  return (
    <FeedbackProvider>
    <BrowserRouter>
     <Header  />
     <Routes>
     <Route exact path='/' element={
       <>
       <div className="container">
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      </div>
         <AboutIcon/>
       </>
     } >
    </Route>
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
