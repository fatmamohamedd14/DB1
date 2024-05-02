import React, { useState } from "react";
import "./Gennew.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from"../../component/navbar/Navbar"

const GenNew =({inputs , title}) => {
    const[file] = useState ("");
    console.log(file);
    return(
        <div className="gennew">
           <Sidebar/>
            <div className="newContainer">
           <Navbar/> 
           <div className="top">
            <h1>{title}</h1>
            </div>

            <div className="button">
                   
                    <div className="right">
                        <form>
                            {inputs.map((input) =>(
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}  />
                            </div>
                            ))}

                            
                        <button>Send</button>
                        
                       </form>
                    </div>
                 </div>
             </div>
        </div>
    );
};
export default GenNew