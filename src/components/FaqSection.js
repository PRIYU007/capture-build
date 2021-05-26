const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
        <div className="question">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Learn/Teach Others</p>
            <p>Start At The Beginning,Block Out Negative Noise,Just Do It!</p>
          </div>
        </div>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Start your day with your most important work.</p>
            <p>
              Map out your perfect daily schedule according to your personal
              “productivity curve”
            </p>
          </div>
        </div>
        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>We Accept</p>
            <p>Paypal,Debit/Credit Card,Google Pay</p>
          </div>
        </div>
        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="answer">
            <p>Electronic Items</p>
            <p>
              Laptop,Mobile,Camera,TV,Voice Assistant,Smart Bulb,PC parts and
              much more!
            </p>
          </div>
        </div>
      </h2>
    </div>
  );
};
export default FaqSection;
