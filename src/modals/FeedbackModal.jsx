import { useState, useRef } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

const FeedbackModal = ({isFeedbackOpen,closeFeedback}) => {
  const [feedback, setFeedback] = useState(''); // Feedback state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("");
    closeFeedback();
    alert("Your Feedback Sent");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" >
      <div  className=" py-6 px-10 w-[600px] bg-white shadow-lg rounded-md text-font01 relative">
        <h2 className="text-4xl font-bold text-center my-20">Write Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Please write your thinks here..."
              rows="8"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-font02 bg-opacity-80 text-white px-10 py-2 text-lg rounded-sm hover:bg-opacity-100 my-8"
            >
              Send
            </button>
          </div>
        </form>
        {/* Close button */}
        <button
          onClick={closeFeedback}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <IoMdCloseCircle className='text-font02 hover:text-opacity-80' size={36}/>
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
