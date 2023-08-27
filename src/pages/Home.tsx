import { NavLink } from "react-router-dom"
import styled from "styled-components"



function Home() {

  const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  gap: 1em;
  background-color: #fefefe;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  box-shadow:  0 30px 60px -30px rgba(0, 0, 0, .2);
  width: 50vw;
  padding: 3rem;
  div{
    height: 100%;}


  a{
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, .4);
    padding: 5px 10px ;
  }
`

  return (
    <HomeWrapper>
    <div>
        To Check out the customers and their data.
    </div>
    <NavLink to={"/customers"}>Visit Dashboard</NavLink>
    </HomeWrapper>
  )
}

export default Home