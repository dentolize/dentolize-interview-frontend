import { NavLink } from "react-router-dom"
import ActionBtns from "../components/styled-components/ActionBtns"
import Wrapper from "../components/styled-components/Wrapper"


function Home() {
  return (
    <Wrapper>
    <div>
        To Check out the customers and their data.
    </div>
    <ActionBtns>
    <div className="btn-wrapper">
    <NavLink to={"/customers"} className="btn-filled">Visit Dashboard</NavLink>
    </div>
    </ActionBtns>

    </Wrapper>
  )
}

export default Home