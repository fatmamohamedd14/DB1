import React, { useState } from "react";
import "./landatatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { languageRows,languageColumns } from "../../LandatatableSourse";

import { Link } from "react-router-dom";

const LanDatatable =() => {
  const[data , setData] = useState(languageRows)
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
          Add new Language
          <Link to="/languages/Lannew" className="link" >
            Add new </Link>
          </div>
             <DataGrid
             className="datagrid"
                rows={data}
                columns={languageColumns.concat(actionColumn)}
                pageSize={9}
                rowPerPageOption={[9]}
                checkboxSelection
            />   
           </div>
    )
}
export default LanDatatable