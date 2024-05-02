import React from "react";
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import "./BkList.scss"

import AuDatatable from "../../component/datatable/AuDatatable";



const AuList =() => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <AuDatatable/> 
              


            </div>
        </div>
    )
}
export default AuList