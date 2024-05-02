import React from "react";
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AttributionIcon from '@mui/icons-material/Attribution';
import LanguageIcon from '@mui/icons-material/Language';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import{Link} from "react-router-dom"
import{DarkModeContext} from "../../context/darkModeContext";
import {useContext} from 'react';




const Sidebar =() => {
    const{dispatch}= useContext(DarkModeContext);

    return(
        <div className="Sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">Bookify</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                <p className="tittle">MAIN</p>
                     <Link to="/" style={{textDecoration: "none"}}>
                    <li>
                    <DashboardIcon className="icon"/>
                        <span>Dashboard</span> 
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                        <span>Users</span> 
                    </li>
                    </Link>
                    <Link to="/books" style={{textDecoration: "none"}}>

                    <li>
                    <AutoStoriesOutlinedIcon className="icon"/>
                        <span>Books</span> 
                    </li>
                    </Link>
                    <Link to="/authers" style={{textDecoration: "none"}}>

                    <li>
                    <AttributionIcon className="icon"/>
                        <span>Authers</span> 
                    </li>
                    </Link>
                     <Link to="/languages" style={{textDecoration: "none"}}>

                    <li>
                    <LanguageIcon className="icon"/>
                        <span>Languages</span> 
                    </li>
                    </Link>
                    <Link to="/genres" style={{textDecoration: "none"}}>

                    <li>
                    <LibraryBooksIcon className="icon"/>
                        <span>Genres</span> 
                    </li>
                    </Link>
                </ul>
                <br/>
            </div>
            <div className="bottom">
                <div className="colorOption"
                onClick={() => dispatch({type:"LIGHT"})}>
                </div>
                <div className="colorOption"
                  onClick={() => dispatch({type:"DARK"})}>
                </div>
            </div>

        </div>
    )
}
export default Sidebar