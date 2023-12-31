export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
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
    id: 1,
    username: "Sachin Dahal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "sachindahal@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Anjila Rai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anjilarai@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Ashmina Rai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ashminarai@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Manoj Rai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "manojrai@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Abinash Rai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abinashrai@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Aashish Rai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "aashishrai@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Manika Rajbhandari",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "manikarajbhandariw@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Isha Dhimal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ishadhimal@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Anita Paudel",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anitapaudel@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Sushant Dahal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sushantdahal@gmail.com",
    status: "active",
    age: 65,
  },
];
