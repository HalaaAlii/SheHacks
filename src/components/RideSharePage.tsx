import { Fragment } from "react";
import "./RideSharePage.css";
function RidesharePage() {
  return (
    <>
      <div
        className="rideshare-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          className="rideshare-section"
          style={{ width: "48%", border: "1px solid #ccc", padding: "10px" }}
        >
          <h2>Need a Ride</h2>
          {/* List of posts by people who need a ride */}
          <div className="posts">
            <p>
              <strong>John Doe:</strong> Need a ride to Downtown, 9 AM.
            </p>
            <p>
              <strong>Jane Smith:</strong> Looking for a carpool to the airport
              tomorrow.
            </p>
            {/* Add more posts as needed */}
          </div>
        </div>

        <div
          className="rideshare-section"
          style={{ width: "48%", border: "1px solid #ccc", padding: "10px" }}>
          <h2>Offer a Ride</h2>
          {/* List of posts by people who offer a ride */}
          <div className="posts">
            <p>
              <strong>Alice Johnson:</strong> Offering a ride to the University
              area, 8 AM - 5 PM.
            </p>
            <p>
              <strong>Bob Brown:</strong> Have 3 seats available for a trip to
              the beach this weekend.
            </p>
            {/* Add more posts as needed */}
          </div>
        </div>
      </div>
      
        <div className="form-container">
          <div className="form-section">
            <h3>Post Your Ride Need</h3>
            <input type="text" placeholder="Your Name" />
            <input
              type="text"
              placeholder="Your Need (e.g., to Downtown, 9 AM)"
            />
            <button>Post Need</button>
          </div>

          <div className="form-section">
            <h3>Post Your Ride Offer</h3>
            <input type="text" placeholder="Your Name" />
            <input
              type="text"
              placeholder="Your Offer (e.g., 3 seats to beach)"
            />
            <button>Post Offer</button>
          </div>
        </div>
      
    </>
  );
}

export default RidesharePage;
