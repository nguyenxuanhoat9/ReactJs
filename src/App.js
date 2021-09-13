import React from "react";
import reactDom from "react-dom";


function App() {

  const [data, setData] = React.useState(["Loading data..."]);
  const [alert, setAlert] = React.useState("")
  const [add, setAdd] = React.useState(true)
  const [del, setDel] = React.useState(true)


  const addItem = (e) => {
    e.preventDefault()
    const text = document.getElementById("txt").value
    setData([...data, text])
    setAdd(!add)  // thay đổi state tại đây để alert chỉ chạy khi gọi đến add 
    document.getElementById("txt").value = ""
  }

  const delItem = (index) => {
    const newData = [...data]
    newData.splice(index, 1)
    setData(newData)
    setDel(!del)
  }
// loại bỏ loading data sau 1 thời gian
  React.useEffect(() => {
    setTimeout(() => {
      setData([])
    }, 2000)
  }, [])

  React.useEffect(() => {
    if (!add) {
      setAlert(<div className="alert alert-success">Added successfully !</div>)
      setAdd(!add)
    }
    // xóa thông báo sau 1 thời gian 
    setTimeout(() => {
      setAlert("")
    }, 2000)
  }, [add])

  React.useEffect(()=>{
    if(!del){
      setAlert(<div className="alert alert-danger">Deleted successfully !</div>)
      setDel(!del)
    }
    setTimeout(() => {
      setAlert("")
    }, 2000)
  },[del])
  return (
    <div>
      <div>
        <div id="header">
          <p>ToDo List</p>
        </div>
        <div id="body">
          <div className="container">
            <h3>ToDo List</h3>
            <div id="main" className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div id="add" className="text-center">
                  <form className="form-inline">
                    <div className="form-group mb-2">
                      <input type="text" className="form-control mr-2" id="txt" placeholder="Course name" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={addItem}>Add Course</button>
                  </form>
                </div>
                {alert}
                {/* <div className="alert alert-success">Added successfully !</div>
                <div className="alert alert-danger">Deleted successfully !</div> */}
                <table id="list" className="table">

                  <tbody>
                    {
                      data.map((item, index) =>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td>{item}</td>
                          <td><a href="#" onClick={() => delItem(index)}>delete</a></td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}




export default App;
// didmount : tự động chạy, chạy ngay sau khi render của trạng thái mounting thực hiện xong, mảng tham số rỗng, không đổi
// didupdate: tự động chạy, chạy ngay sau khi render của trạng thái Updateing thực hiện xong, mảng tham số là tham số có thực hiện thay đổi 
// willUnmount: tự động chạy, chạy ngay sau khi một cấu trúc HTML bị loại bỏ khỏi giao diện