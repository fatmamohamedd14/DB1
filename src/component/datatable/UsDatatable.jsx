import React, { useState } from "react";
import "./usdatatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { userRows,userColumns } from "../../Usdatatablesource";

import { Link } from "react-router-dom";

const Datatable =() => {
  const[data , setData] = useState(userRows)
  const handleDalete=(id)=>{
    setData(data.filter(item=> item.id !==id));
  }
   

    const actionColumn=[
        {field:"action" ,
         headerName:"Actoin",
          width:200 , 
          renderCell:(params)=>{
            return(
                <div className="cellAction">
                  <Link to="/users/test" style={{textDecoration: "none"}}>
                  <div className="viewButton">View</div>
                  </Link>
                  <div className="deleteButton" onClick={()=> handleDalete(params.row.id) }>Delete</div>  
                </div>
             );     
         },
    },
  ];
    return(
        <div className="datatable">
          <div className="datatableTitle">
          Add new user
          <Link to="/users/Usnew" className="link" >
            Add new </Link>
          </div>
             <DataGrid
             className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowPerPageOption={[9]}
                checkboxSelection
            />   
           </div>
    )
}
export default Datatable