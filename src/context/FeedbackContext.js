import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Item 1 Item 1 Item 1 Item 1",
      rating: 10,
    },
    {
        id: 2,
        text: "Item 2 Item 2 Item 2 Item 2",
        rating: 7,
      },
      {
        id: 3,
        text: "Item 3 Item 3 Item 3 Item 3",
        rating: 9,
      },
  ]);
const [feedbackEdit, setFeedbackEdit]=useState({
    item:{},
    edit: false
})

//Update feedback item
const updateFeedback = (id, updItem) => {
  setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}: item))
}

// delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
// add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
// set item to be updated
const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
}
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {/* all the components need access to provider */}
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
