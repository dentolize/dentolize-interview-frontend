import { NavLink } from "react-router-dom"
import styled from "styled-components"
import ActionBtns from "../components/styled-components/ActionBtns"

const Wrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

function Home() {
  return (
    <Wrapper>
    <div>
        To Check out the customers and their data.
    </div>
    <ActionBtns>
    <NavLink to={"/customers"} className="btn-filled">Visit Dashboard</NavLink>
    </ActionBtns>

    </Wrapper>
  )
}

export default Home