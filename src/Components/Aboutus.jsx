import React from "react";

function AboutUs() {
  return (
    <>
      <div className="Maindiv">
        <h1 className="Mainheader">About Bus Transit Service</h1>
        <div className="">
          <div className="Actions">
            <p>
              <h2 className="Textone">What we do</h2>
            </p>
            <div className="Move">
              <ul className="List">
                <li>Pick you at your door step</li>
                <li>Give you fair bus rates</li>
                <li>Take you where you want to go</li>
                <li>Take you there fast</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="Actionsa">
          <h2 className="Misson">Our Mission</h2>
          <p>To serve you how we know best.</p>
        </div> */}
        <h2 className="class">
          <li className="">Our Core Values</li>
        </h2>
        <div className="core">
          <h3 className="cores"> 1.Integrity</h3>
          <p className="content">
            BRT aims at serving clients in the most dignified and honest way
            possible.
          </p>
          <h3 className="cores">2.Diversion and Inclusion</h3>
          <p>
            Considering all peoples, BRT gives everyone a fair opportunity to go
            on with their daily movement in the most timely manner.
          </p>
          <h3 className="cores">3.Professionalism</h3>
          <p>
            The BRT offers high quality services to all its clients, maintaining
            world class professionalism.
          </p>
        </div>
        <div>
          <h2 className="Vision">Our Vision</h2>
          <p className="lastp">
            Partner with all local bus service providers and provide our
            services to all towns by 2025.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
