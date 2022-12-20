import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import "./styles/Home.scss";
import AuthContext from "../Contexts/AuthContext";



const Home = () => {
  const item = useContext(AuthContext);
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
