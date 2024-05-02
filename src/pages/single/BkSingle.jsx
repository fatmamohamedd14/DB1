import React from "react";
import "./UsSingle.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from"../../component/navbar/Navbar"

const BkSingle =() => {
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
                                <span className="itemKey">Name : </span>
                                <span className="itemValue">the little </span>
                                </div>
                                <div className="detailItem">
                                <span className="itemKey">Discrepyion: </span>
                                <span className="itemValue">nrtjbngjbngjbajr</span>
                                </div>
                                <div className="detailItem">
                                <span className="itemKey">Language : </span>
                                <span className="itemValue">English</span>
                                </div>
                                <div className="detailItem">
                                <span className="itemKey">Gnere : </span>
                                <span className="itemValue">Rommance</span>
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
export default BkSingle 