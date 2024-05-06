export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary data
export const userRows = [
  {
    _id: "660dd9bbba5fa2699fb39fc6",
    name: "Habiba",
    email: "b503cf5c1b@emailabox.pro",
    password: "$2b$08$k6xc.w7MlUCIfSi7rRl3quwt1cheqztze6kv6yQqn4lMTRFf/fUbe",
    age: 80,
    role: "user",
    verifyEmail: true,
    isActive: true,
    wishlist: [],
    status: "not_read",
    createdAt: "2024-04-03T22:35:39.268Z",
    updatedAt: "2024-04-03T22:35:39.268Z",
    __v: 0,
  },
  {
    _id: "660ddc83442b9b011d55b4e8",
    name: "Habiba",
    email: "b503cf5c1b@emailabox111.pro",
    password: "$2b$08$2k4QrX64wVQ0uPL1xaNvF.9tz4Jx7ebejyg3ltU2kjt5YdNHmxlKC",
    age: 80,
    role: "admin",
    verifyEmail: false,
    isActive: true,
    wishlist: [],
    status: "not_read",
    createdAt: "2024-04-03T22:47:31.552Z",
    updatedAt: "2024-04-03T22:47:31.552Z",
    __v: 0,
  },
];
