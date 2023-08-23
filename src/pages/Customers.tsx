import { GETallCustomers } from "../api/data";
import { TCustomer } from "../types/api-types";

function Home() {
  const result = GETallCustomers()
  const data: TCustomer[] = result.data.allCustomers
  console.log(data)
  
  return (

    <div>
      {data.map((cx) => {
        return (<div>
          {cx.firstName + " " + cx.lastName}
          {cx.id}
          {cx.email}
          {cx.phone}
        </div>);
      })}
    </div>
  )
}

export default Home