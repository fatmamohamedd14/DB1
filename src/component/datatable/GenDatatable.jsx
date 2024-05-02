import React, { useState } from "react";
import "./gendatatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { genreRows,genreColumns } from "../../GenDatatablesourse";

import { Link } from "react-router-dom";

const GenDatatable =() => {
  const[data , setData] = useState(genreRows)
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
                  <div className="deleteButton" onClick={()=> handleDalete(params.row.id) }>Delete</div>  
                </div>
             );     
         },
    },
  ];
    return(
        <div className="datatable">
          <div className="datatableTitle">
          Add new Genre
          <Link to="/genres/Gennew" className="link" >
            Add new </Link>
          </div>
             <DataGrid
             className="datagrid"
                rows={data}
                columns={genreColumns.concat(actionColumn)}
                pageSize={9}
                rowPerPageOption={[9]}
                checkboxSelection
            />   
           </div>
    )
}
export default GenDatatable