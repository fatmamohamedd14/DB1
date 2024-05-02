import React from "react";
import "./Home.scss"
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";

import Chart from "../../component/chart/Chart";

const Home =() => {
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                  <Widget type="user"/>
                  <Widget type="book"/>
                  <Widget type="auther"/>
            </div>
            <div className="charts">
                <Chart/>
            </div>
            </div>     
        </div>
    )
}
export default Home