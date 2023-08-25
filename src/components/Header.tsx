import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()
  return (
    <>
    <button onClick={() => navigate(-1)}>←Go Back</button>

      </>

  )
}

export default Header