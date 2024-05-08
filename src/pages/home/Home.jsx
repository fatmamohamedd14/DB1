import React, { useEffect } from "react";
import "./Home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import Chart from "../../component/chart/Chart";
import { Link, useNavigate } from "react-router-dom";
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
          <div className="w-full min-h-[300px] bg-white border rounded drop-shadow-md p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold">All Users 👨</h3>
              <p className="text-gray-800 text-2xl">
                View, delete or add new users to the system{" "}
              </p>
            </div>
            <Link
              to={"/users"}
              className="underline text-xl text-gray-600 hover:text-blue-400 duration-150"
            >
              View Users
            </Link>
          </div>
          <div className="w-full min-h-[300px] bg-white border rounded drop-shadow-md p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold">All Book 📚</h3>
              <p className="text-gray-800 text-2xl">
                View, delete or add new books to the system{" "}
              </p>
            </div>
            <Link
              to={"/books"}
              className="underline text-xl text-gray-600 hover:text-blue-400 duration-150"
            >
              View Books
            </Link>
          </div>

          <div className="w-full min-h-[300px] bg-white border rounded drop-shadow-md p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold">All Authors ✍️</h3>
              <p className="text-gray-800 text-2xl">
                View, delete or add new authors to the system{" "}
              </p>
            </div>
            <Link
              to={"/authers"}
              className="underline text-xl text-gray-600 hover:text-blue-400 duration-150"
            >
              View Authors
            </Link>
          </div>
          <div className="w-full min-h-[300px] bg-white border rounded drop-shadow-md p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold">All Languages 🌐</h3>
              <p className="text-gray-800 text-2xl">
                View, delete or add new Language to the system{" "}
              </p>
            </div>
            <Link
              to={"/languages"}
              className="underline text-xl text-gray-600 hover:text-blue-400 duration-150"
            >
              View Languages
            </Link>
          </div>
          <div className="w-full min-h-[300px] bg-white border rounded drop-shadow-md p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold">All Genres 🎭</h3>
              <p className="text-gray-800 text-2xl">
                View, delete or add new genre to the system{" "}
              </p>
            </div>
            <Link
              to={"/genres"}
              className="underline text-xl text-gray-600 hover:text-blue-400 duration-150"
            >
              View Books
            </Link>
          </div>
        </div>
        {/* <div className="charts">
          <Chart />
        </div> */}
      </div>
    </div>
  );
};
export default Home;
