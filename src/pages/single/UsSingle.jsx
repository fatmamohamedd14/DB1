import React from "react";
import "./UsSingle.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from"../../component/navbar/Navbar"

const UsSingle =() => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/> 
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                     <h1 className="title">Information</h1>
                         <div className="item">
                            <img  
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                <span className="itemKey">Email : </span>
                                <span className="itemValue">JaneDoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                <span className="itemKey">Phone : </span>
                                <span className="itemValue">01125145033</span>
                                </div>
                                <div className="detailItem">
                                <span className="itemKey">Country : </span>
                                <span className="itemValue">America</span>
                                </div>
                                <div className="detailItem">
                                <span className="itemKey">Intersted : </span>
                                <span className="itemValue">Cooking , Comedy , Rommance</span>
                                </div>
                            </div>
                        </div>  
                      </div> 
                     <div className="right"></div>
                </div>
            </div>
        </div>
    )
}
export default UsSingle 