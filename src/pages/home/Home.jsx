import React, { useEffect } from "react";
import "./Home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";

import { useNavigate } from "react-router-dom";
import HomeCard from "./HomeCard";
const PAGES_DATA = [
  { title: "All Users 👨", name: "Users", route: "/users" },
  { title: "All Books 📚", name: "Books", route: "/books" },
  { title: "All Authors ✍️", name: "Authors", route: "/authors" },
  { title: "All Languages 🌐", name: "Languages", route: "/languages" },
  { title: "All Genres 🎭", name: "Genres", route: "/genres" },
];
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="book" />
          <Widget type="auther" />
        </div> */}

        <div className="grid grid-cols-3 gap-5 p-5">
          {PAGES_DATA.map((page, index) => {
            return <HomeCard data={page} key={index} />;
          })}
        </div>
        {/* <div className="charts">
          <Chart />
        </div> */}
      </div>
    </div>
  );
};
export default Home;
