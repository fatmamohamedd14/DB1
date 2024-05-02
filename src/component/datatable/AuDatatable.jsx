import React, { useState } from "react";
import "./audatatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { autherRows,autherColumns } from "../../Audatatablesourse";

import { Link } from "react-router-dom";

const AuDatatable =() => {
  const[data , setData] = useState(autherRows)
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
                  <Link to="/authers/test" style={{textDecoration: "none"}}>
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
          Add new auther
          <Link to="/authers/Aunew" className="link" >
            Add new  </Link>
          </div>
             <DataGrid
             className="datagrid"
                rows={data}
                columns={autherColumns.concat(actionColumn)}
                pageSize={9}
                rowPerPageOption={[9]}
                checkboxSelection
            />   
           </div>
    )
}
export default AuDatatable