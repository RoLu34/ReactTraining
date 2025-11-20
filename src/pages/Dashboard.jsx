import { Link, Outlet } from "react-router";

function Dashboard () {

    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>  
            <Outlet />
        </div>
    )
}

export default Dashboard;