import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import { Error404 } from './pages/Error404';
import { DefaultLayout } from './layout/DefaultLayout';
import { ThemeProvider } from 'styled-components';

function App() {

  // const [isDark, setDark] = useState<boolean>(false)

  // const themeSwitch = () => {
  //   setDark(prev=> !prev)
  //   console.log(isDark)
  // }

  const theme = {
    light: {
      font: '#000',
      bg: '#FFFFFF',
    },
    dark: {
      font: '#fff',
      bg: '#000',
    }
  }

  return (
    <>
<ThemeProvider theme={theme}>
<DefaultLayout>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/customers/:id" element={<Customer/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
</DefaultLayout>
</ThemeProvider>
    </>
)
}

export default App;
