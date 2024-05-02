import React from "react";
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import "./LanList.scss"
import LanDatatable from "../../component/datatable/LanDatatable"


const lanList =() => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                
                <LanDatatable/>


            </div>
        </div>
    )
}
export default lanList