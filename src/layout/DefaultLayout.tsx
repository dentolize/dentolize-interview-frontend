import styled from "styled-components"
import Header from "../components/Header"

export const DefaultLayout =({children}:{children: JSX.Element}) =>{

    const Main = styled.div`
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    `

    return(
        <div className="layout">
        <div className="header">
            <Header/>
        </div>
        <Main>{children}</Main>
        </div>
    )
}