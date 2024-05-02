import React from "react";
import "./widget.scss"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AttributionIcon from '@mui/icons-material/Attribution';


const Widget =({type}) => {
    let data; 

    switch(type){
        case "user":
            data={
                title :"USERS",
                link : "see all users",
                icon : <AccountCircleOutlinedIcon className="icon" style={{color:"crimson" , backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            }; 
            break;
            case "book":
                data={
                    title :"BOOKS",
                    link : "see all Books",
                    icon : <AutoStoriesOutlinedIcon className="icon" style={{color:"green" , backgroundColor:"rgba(0,128,0,0.2)"}}/>,
                };
                break;
                case "auther":
                    data={
                        title :"AUTHERS",
                        link : "see all Authers",
                        icon : <AttributionIcon className="icon"style={{color:"goldenrod" , backgroundColor:"rgba(218,165,32,0.2)"}}/>,
                    };
                    break;
            default:
    break;
    }
    return(
        <div className="widget">
             <div className="left">
             <span className="tittle">{data.title}</span>
             <span className="link">{data.link}</span>
             </div>
             <div className="right">{data.icon}</div>
        </div>
    );
};
export default Widget