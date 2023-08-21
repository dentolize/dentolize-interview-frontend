import { gql, useQuery } from "@apollo/client";

import "./App.css";

function App() {
  const result = useQuery(gql`
    query {
      allCustomers {
        id
      }
    }
  `);

  console.log(result);

  return <div>Hello World</div>;
}

export default App;
