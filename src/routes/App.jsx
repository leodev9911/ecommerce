import { Layout } from '../containers/Layout';
import { EmailPassword } from '../containers/EmailPassword';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { CreateNewPassword } from '../containers/CreateNewPassword';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/Create-new-password' element={<CreateNewPassword/>}/>
        <Route path='/email-password'element={<EmailPassword/>}/>
      </Routes>
    </Layout>
  )
}

export default App
