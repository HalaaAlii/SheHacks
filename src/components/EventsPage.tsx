import React from 'react';
import './EventPage.css'; // Import the CSS file for styling

function EventPage() {
  return (
    <>
    <div className="event-page">
      <section className="trending-events">
        <h2>Trending Events</h2>
        <div className="event">
          <h3>Female Only Hackathon</h3>
          <p>Date: July 10, 2024</p>
          <p>Location: Tech Hub, Downtown</p>
          <p>A hackathon event focused on women in technology.</p>
        </div>
        <div className="event">
          <h3>Women in Engineering Conference</h3>
          <p>Date: August 15, 2024</p>
          <p>Location: Grand Conference Hall</p>
          <p>Conference featuring prominent women engineers and leaders.</p>
        </div>
        {/* Add more trending events as needed */}
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
    </>
  );
}

export default EventPage;
