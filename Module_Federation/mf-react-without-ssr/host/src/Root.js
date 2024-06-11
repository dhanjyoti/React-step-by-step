import { Link, Outlet } from "react-router-dom"


const Root = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', flex:'1'}}>
        <div style={{display:'flex', flexDirection:'row', gap:"20px", width:"15rem"}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/client1"}>Client</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Root;