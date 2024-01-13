import React, { useState } from "react";
 
function Sidebar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };


  const sidebarStyle: React.CSSProperties = {
    backgroundColor: "lightpink",
    width: "200px", // Fixed width for the sidebar
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "fixed", // Added to fix the sidebar position
    left: 0, // Align to the left side of the screen
    top: 10 // Align to the top of the screen
  };

  const imageStyle: React.CSSProperties = {
    width: "80%", 
    height: "auto", 
    cursor: "pointer",
    borderRadius: 60
  };

  return (
    <>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          style={sidebarStyle}
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <img
            src="/public/images/rideshare_icon.png"
            style={imageStyle}
            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}
            alt="Home"
          />
          <img
            src="/public/images/events_icon.jpg"
            style={imageStyle}
            className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => handleTabClick("profile")}
            alt="Profile"
          />
          <img
            src="/public/images/girlsDiscussion_icon.png"
            style={imageStyle}
            className={`nav-link ${activeTab === "messages" ? "active" : ""}`}
            onClick={() => handleTabClick("messages")}
            alt="Messages"
          />
          <img
            src="/public/images/circle.jpg"
            style={imageStyle}
            className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => handleTabClick("settings")}
            alt="Settings"
          />
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "home" ? "show active" : ""
            }`}
            id="v-pills-home"
            role="tabpanel"
            tabIndex={0}
          >
            RideShare
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "profile" ? "show active" : ""
            }`}
            id="v-pills-profile"
            role="tabpanel"
            tabIndex={0}
          >
            Events
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "messages" ? "show active" : ""
            }`}
            id="v-pills-messages"
            role="tabpanel"
            tabIndex={0}
          >
            Discussion
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "settings" ? "show active" : ""
            }`}
            id="v-pills-settings"
            role="tabpanel"
            tabIndex={0}
          >
            Rideshare
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
