export const userColumns = [
    {field: "id", headerName: "ID" , width: 70},
    {
        field:"user",
        headerName:"User",
        width:230,
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
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
        field:"age",
        headerName:"Age",
        width: 100,  
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
export const userRows = [
    {
        id: 1,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"1snow@gmail.com",
        age:"35",
    },
    {
        id: 2,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"2snow@gmail.com",
        age:"35",
    },
    {
        id: 3,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"3snow@gmail.com",
        age:"35",
    },
    {
        id: 4,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"4snow@gmail.com",
        age:"35",
    },
    {
        id: 5,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"5snow@gmail.com",
        age:"35",
    },
    {
        id: 6,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"6snow@gmail.com",
        age:"35",
    },
    {
        id: 7,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"7snow@gmail.com",
        age:"35",
    },
    {
        id: 8,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"8snow@gmail.com",
        age:"35",
    },
    {
        id: 9,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"9snow@gmail.com",
        age:"35",
    },
    {
        id: 10,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"active",
        email:"10snow@gmail.com",
        age:"35",
    },
    {
        id: 11,
        username:"Snow",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"passive",
        email:"11snow@gmail.com",
        age:"35",
    },
];