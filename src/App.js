import axios from "axios";
import React from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = React.useState([])
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      data: {}
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err.data)
    })

  }, [])






  return (
    <div id="wrapper" className="container">
      <h2>Quản lý thành viên</h2>
      <p>Demo đơn giản về hiển thị danh sách thành viên thông qua việc <b>GET Data API bằng Axios Module</b></p>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
{
  data.map(user =>
    <tr>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
  </tr>
  )
}

        </tbody>
      </table>
    </div>

  )
}

export default App;
