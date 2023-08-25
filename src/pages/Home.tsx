import { NavLink } from "react-router-dom"

function Home() {
  return (
    <>
    <div>
        Welcome to my application.
    </div>
    <NavLink to={"/customers"}>To Dashboard</NavLink>

    </>
  )
}

export default Home