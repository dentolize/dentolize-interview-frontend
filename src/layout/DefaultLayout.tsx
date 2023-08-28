import Header from "../components/Header"
import { AppWrapper } from "../components/styled-components/AppWrapper.styled"
import { Container } from "../components/styled-components/Container.styled"
import { GlobalStyles } from "../components/styled-components/GlobalSyles.styled"
// import Main from "../components/styled-components/Main"

export const DefaultLayout =({children}:{children: JSX.Element}) =>{

    return(

        <AppWrapper>
            <GlobalStyles/>
                <Header/>
            <Container>{children}</Container>
        </AppWrapper>
    )
}