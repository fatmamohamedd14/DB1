import React from "react";
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import "./BkList.scss"
import BkDatatable from "../../component/datatable/BkDatatable";



const BkList =() => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <BkDatatable/>
              
            </div>
        </div>
    )
}
export default BkList