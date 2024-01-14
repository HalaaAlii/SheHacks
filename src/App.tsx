import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import { Fragment } from "react";
import "./App.css";
import DiscussionPage from "./components/DIscussionPage";
import { Routes, Route,useLocation } from "react-router-dom";
import Circle from "./pages/Circle";
import Discussion from "./pages/Discussion";
import Event from "./pages/Event";
import Rideshare from "./pages/Rideshare";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Content">
      {location.pathname !== '/' && (
          <div className="Sidebar">
            <Sidebar />
          </div>
        )}
        <Routes>
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/event" element={<Event />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/rideshare" element={<Rideshare />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Login />} /> 
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;
