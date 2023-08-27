import Header from "../components/Header"
// import Main from "../components/styled-components/Main"

export const DefaultLayout =({children}:{children: JSX.Element}) =>{

    return(
        <div className="layout">
            <div className="header">
                <Header/>
            </div>
            <div className="main-div">{children}</div>
        </div>
    )
}