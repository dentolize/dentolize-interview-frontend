import { Link } from "react-router-dom"
import styled from "styled-components"
// import { HeaderWrapper } from "./styled-components/HeaderWrapper.styled"



export const HeaderWrapper = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: space-around;
  width: 100%;
  padding: 16px 24px;


  button{
    background: none;
    border: none;
  }

> div:first-child > a {
  color: var(--main-color);
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin: 0 32px;
}


  > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button:last-child{
        padding: 0;
        border: 0;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 12px;
        border-left: 2px solid #ddd;
    }
    span{
      color: var(--main-color);
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }
     img{
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 4px;
  }
  }
    }
}

`
const Header = () => {
 
  return (
    <HeaderWrapper>
<div>
      <Link to={"/"}>DentX</Link>
</div>
<div>
      <button onClick={()=>""} title="Switch Theme">
        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
     
      <button >
        <img src="https://media.licdn.com/dms/image/D4D03AQH-Un10AOF7-g/profile-displayphoto-shrink_400_400/0/1679262125203?e=1698883200&v=beta&t=JflpP66v8nI-Q4dDY1JPncdNnbvZykArHo7zurBq_G4" />
        <span>Taric Ov</span>
      </button>
      </div>

  </HeaderWrapper>

  )
}

export default Header