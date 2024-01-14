import React from 'react';
import './DiscussionPage.css'; 
import { FaHome } from "react-icons/fa";

function DiscussionPage() {
  return (
    <div className="discussion-page">
      <div className="search-bar">
        <input type="text" placeholder="Search discussions..." />
        <button>Search</button>
      </div>

      <div className="discussions">
        <div className="discussion">
          <h3>Women in Tech</h3>
          <p>Discussing the challenges and opportunities for women in the technology industry.</p>
          <div className="discussion-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
        <div className="discussion">
          <h3>Remote Work Pros and Cons</h3>
          <p>Sharing experiences and tips for effective remote work.</p>
          <div className="discussion-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
        {/* Add more discussions as needed */}
      </div>

      <div className="post-discussion">
        <textarea placeholder="Post your discussion topic..."></textarea>
        <button>Post</button>
      </div>
    </div>
  );
}

export default DiscussionPage;
