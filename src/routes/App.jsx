import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { EmailPassword } from '../containers/EmailPassword';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/email-password'element={<EmailPassword/>}/>
      </Routes>
    </Layout>
  )
}

export default App
