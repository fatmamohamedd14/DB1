export const autherColumns = [
    {field: "id", headerName: "ID" , width: 70},
    {
        field:"auther",
        headerName:"Auther",
        width:230,
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.authername}
                </div>
            );
        },
    },
    {
        field:"email",
        headerName:"Email",
        width:230,
    },
    {
        field:"numberofbooks",
        headerName:"Number of books",
        width: 150,  
    },
    {
        field:"status",
        headerName:"Status",
        width: 160, 
        renderCell: (params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}` }>
                    {params.row.status}
                    </div>
            );
        },
    },
];
//temporary data
export const autherRows = [
    {
        id: 1,
        authername:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"1snow@gmail.com",
        numberofbooks:"35",
    },
    {
        id: 2,
        authername:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"2snow@gmail.com",
        numberofbooks:"35",
    },
    {
        id: 3,
        authername:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"3snow@gmail.com",
        numberofbooks:"35",
    },
    {
        id: 4,
        authername:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"4snow@gmail.com",
        numberofbooks:"35",
    },
    

];