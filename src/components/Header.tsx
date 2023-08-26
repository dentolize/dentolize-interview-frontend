import { useNavigate } from "react-router-dom"
import ActionBtns from "./styled-components/ActionBtns"

const Header = () => {
  const path = location.pathname 
    const navigate = useNavigate()
  return (
    <>
    {path !== "/" &&
  <>
    <h1>
      Customer Dashboard
      </h1>
    <ActionBtns>
    <div className="btn-wrapper">
    <button onClick={() => navigate(-1)}>←</button>
      </div>
    </ActionBtns>
    </>
  }
  </>

  )
}

export default Header