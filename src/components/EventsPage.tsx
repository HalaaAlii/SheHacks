import React, { useState } from 'react';
import './EventPage.css';
import { useNavigate } from 'react-router-dom';

function EventPage() {
  const navigate = useNavigate();
  const initialAttendeesHackthon = 120; 
  const initialAttendeesConference = 54; 

  const [hackathonAttendees, setHackathonAttendees] = useState(initialAttendeesHackthon);
  const [conferenceAttendees, setConferenceAttendees] = useState(initialAttendeesConference);

  const handleRideClick = () => {
    const confirmPost = window.confirm("Do you want to post on the rideshare page?");
    if (confirmPost) {
      navigate('/rideshare');
    }
  };

  const handleAttendClick = (eventKey: 'hackathon' | 'conference') => {
    if (eventKey === 'hackathon') {
      setHackathonAttendees(hackathonAttendees + 1);
    } else if (eventKey === 'conference') {
      setConferenceAttendees(conferenceAttendees + 1);
    }
  };

  return (
    <div className="event-page">
      <section className="trending-events">
        <h2>Trending Events</h2>
        <div className="event">
          <h3>Female Only Hackathon</h3>
          <p>Date: July 10, 2024</p>
          <p>Location: Tech Hub, Downtown</p>
          <p>A hackathon event focused on women in technology.</p>
          <button className="attend-button" onClick={() => handleAttendClick('hackathon')}>
            I want to attend
          </button>
          <p>{hackathonAttendees} girls want to attend</p>
          <button className="ride-button" onClick={handleRideClick}>
            I want to attend and I need/provide a ride
          </button>
        </div>
        <div className="event">
          <h3>Women in Engineering Conference</h3>
          <p>Date: August 15, 2024</p>
          <p>Location: Grand Conference Hall</p>
          <p>Conference featuring prominent women engineers and leaders.</p>
          <button className="attend-button" onClick={() => handleAttendClick('conference')}>
            I want to attend
          </button>
          <p>{conferenceAttendees} girls want to attend</p>
          <button className="ride-button" onClick={handleRideClick}>
            I want to attend and I need/provide a ride
          </button>
        </div>
        
      </section>

      <section className="other-events">
        <h2>Other Related Events</h2>
        {/* List of other events related to women */}
        <ul>
          <li>Empowerment Workshop for Women Entrepreneurs - Sept 5, 2024</li>
          <li>Women in Leadership Summit - Oct 10, 2024</li>
          <li>Career Development Seminar for Women - Nov 20, 2024</li>
          {/* Add more events as needed */}
        </ul>
      </section>
    </div>
  );
}

export default EventPage;
