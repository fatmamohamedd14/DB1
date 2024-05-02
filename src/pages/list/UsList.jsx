import React from "react";
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import "./UsList.scss"
import Datatable from "../../component/datatable/UsDatatable";
//import BkDatatable from "../../component/datatable/BkDatatable";
//import AuDatatable from "../../component/datatable/AuDatatable";



const UsList =() => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
               {/*  <BkDatatable/>
                <AuDatatable/>  */}


            </div>
        </div>
    )
}
export default UsList