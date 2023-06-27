import { Layout } from '../containers/Layout';
import { EmailPassword } from '../containers/EmailPassword';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { CreateNewPassword } from '../containers/CreateNewPassword';
import { Login } from '../containers/Login';
import { PasswordRecovery } from '../containers/PasswordRecovery';
import { CreateAccount } from '../containers/CreateAccount';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/Create-new-password' element={<CreateNewPassword/>}/>
        <Route path='/email-password'element={<EmailPassword/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Password-recovery' element={<PasswordRecovery/>}/>
        <Route path='/Create-account' element={<CreateAccount/>}/>
      </Routes>
    </Layout>
  )
}

export default App
