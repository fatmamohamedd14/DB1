import React from "react";
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import "./GenList.scss"
import GenDatatable from "../../component/datatable/GenDatatable"


const lanList =() => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                
                <GenDatatable/>


            </div>
        </div>
    )
}
export default lanList