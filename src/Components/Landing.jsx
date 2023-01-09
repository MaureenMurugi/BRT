import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="ParentDiv">
        <div className="Card">
          <h3 className="Paragraph">Choose destinantion</h3>
          <br />
          <br />
          <p className="Paragraph">
            Where do you want to go? And before that where are you right now?
            Then select next.
          </p>
        </div>
        <div className="Card">
          <h3 className="Paragraph">Pick your bus</h3>
          <br />
          <br />
          <p className="Paragraph">
            We have several buses available. Which serves you best? Pick one,
            then select next.
          </p>
        </div>
        <div className="Card">
          <h3 className="Paragraph">Pay and board</h3>
          <br />
          <br />
          <p className="Paragraph">
            Select book if you are satisfied with the info you see. Wait for a
            notification for arrival of your bus. 
            <br />
            ** Travel safe and enjoy!**
          </p>
        </div>
      </div>

      <div className="Below">
        <p>
          <h2 className="Text">What we do</h2>
        </p>
        <ul>
          <li>Pick you at your door step</li>
          <li>Give you fair bus rates</li>
          <li>Take you where you want to go</li>
          <li>Take you there fast</li>
        </ul>
      </div>
      <footer className="Foot">
        <ul>
          <li>Routes</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Feedback</li>
        </ul>
      </footer>
    </div>
  );
};

export default Landing;
