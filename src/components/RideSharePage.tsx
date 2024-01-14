import { Fragment } from "react";
import React, { useState } from "react";
import "./RideSharePage.css";
function RidesharePage() {
  const [posts, setPosts] = useState([
    "Anna Hu: Need a ride to SheHacks from Waterloo at 2 PM.",
    "Brianna Wong: Offering a ride to SheHacks from McMaster University between 2 PM - 5 PM.",
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handlePostSubmit = () => {
    if (name && message) {
      const newPost = `${name}: ${message}`;
      setPosts([...posts, newPost]);
      setName("");
      setMessage("");
    }
  };

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
          <h2>Ride to SheHacks</h2>
          <ul className="posts">
            {posts.map((post, index) => (
              <li key={index}>
                <strong>{post.split(":")[0]}:</strong>{" "}
                {post.split(":").slice(1).join(":")}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rideshare-section"
          style={{ width: "48%", border: "1px solid #ccc", padding: "10px" }}
        >
          <h2>Ride to Woman in Engineering</h2>

          <div className="posts">
            <p>
              <strong>Alice Allen:</strong> Looking for a carpool to the Woman
              Engineering Conference from London.
            </p>
            <p>
              <strong>Helen Sawyer:</strong> Have 3 seats available for a trip
              to Woman Engineering Conference this weekend from London.
            </p>
          </div>
        </div>
        
        <div
          className="form-container-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="form-container">
            <div className="form-section">
              <h3>Post Your Ride</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <select value={event} onChange={(e) => setEvent(e.target.value)}>
                <option value="">Select Event</option>
                <option value="SheHack">SheHack</option>
                <option value="Woman in Engineering">
                  Woman in Engineering
                </option>
              </select>
              <input
                type="text"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={handlePostSubmit}>Write a Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RidesharePage;
