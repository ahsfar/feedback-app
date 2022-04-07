import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
// import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <FeedbackProvider>
    <Router>
      <Header text="Feedback UI" />
      <div className="container">
      <Routes>
        <Route exact path="/" element={
          <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />    
          </>
        }>
        </Route>
        <Route path="/about" element={<AboutPage/>} />
        </Routes>  
        <AboutIcon/>    
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
