import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import { Fragment } from "react";
import "./App.css";
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
        <div className="MainPage">
          <MainPage></MainPage>
        </div>
      </div>
    </>
  );
}

export default App;
