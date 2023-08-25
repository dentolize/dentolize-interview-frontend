import { useParams } from "react-router-dom"
function Customer() {

  const { id } = useParams()

  return (
    <>

  <div className="container">
       <h1>Products Details Page - {id}</h1>
    </div>

    </>
  )
}

export default Customer