import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import { Fragment } from "react";
import "./App.css";
import DiscussionPage from "./components/DIscussionPage";
import { Routes, Route } from "react-router-dom";
import Circle from "./pages/Circle";
import Discussion from "./pages/Discussion";
import Event from "./pages/Event";
import Rideshare from "./pages/Rideshare";

function App() {
  return (
    <>
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Content">
        <div className="Sidebar">
          <Sidebar></Sidebar>
        </div>
        <Routes>
          <Route path="/" element={<Discussion />} />
          <Route path="/event" element={<Event />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/rideshare" element={<Rideshare />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
