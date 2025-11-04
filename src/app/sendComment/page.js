import StepOne from '../components/step-1/step_1';
export default function safeMode() {
  return (
    <div>
      <div className="">
        <form className="form-container max-w-[450px] grid mx-auto mt-10">
          <label >Your Name:</label>
          <input id="name" className="glass-input" type="text" placeholder="Enter your Name..." />
          <label >Your Comment:</label>
          <textarea id="comment" className="glass-textarea" placeholder="Write your comment..."></textarea>
          <button className="mt-3 cursor-pointer glass-button">Send</button>
        </form>
        <div className="mx-auto text-red-700 text-center my-3 ">
          <h6>This is just for demo, you can read safe and danger codes in this page</h6>
        </div>
      </div>
      <StepOne />
    </div>
  )
}