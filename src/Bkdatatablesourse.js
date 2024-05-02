export const bookColumns = [
    {field: "id", headerName: "ID" , width: 70},
    {
        field:"book",
        headerName:"Book",
        width:230,
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.bookname}
                </div>
            );
        },
    },
    {
        field:"auther",
        headerName:"Auther",
        width:200,
    },
    {
        field:"genre",
        headerName:"Genre",
        width: 100,  
    },
    
];
//temporary data
export const bookRows = [
    {
        id: 1,
        bookname:"Snowman",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        auther: "Merten youl",
        genre : "comedy",
    },
    {
        id: 2,
        bookname:"Snowman",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        auther: "Merten youl",
        genre : "comedy",
    },
    {
        id: 3,
        bookname:"Snowman",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        auther: "Merten youl",
        genre : "comedy",
    },
];