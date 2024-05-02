import React, { useState } from "react";
import "./bkdatatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { bookRows,bookColumns } from "../../Bkdatatablesourse";

import { Link } from "react-router-dom";

const BkDatatable =() => {
  const[data , setData] = useState(bookRows)
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
                  <Link to="/books/test" style={{textDecoration: "none"}}>
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
          Add new book
          <Link to="/books/Bknew" className="link" >
            Add new </Link>
          </div>
             <DataGrid
             className="datagrid"
                rows={data}
                columns={bookColumns.concat(actionColumn)}
                pageSize={9}
                rowPerPageOption={[9]}
                checkboxSelection
            />   
           </div>
    )
}
export default BkDatatable