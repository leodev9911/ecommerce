import { Layout } from '../containers/Layout'
import { EmailPassword } from '../pages/EmailPassword'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { CreateNewPassword } from '../pages/CreateNewPassword'
import { Login } from '../pages/Login'
import { PasswordRecovery } from '../pages/PasswordRecovery'
import { CreateAccount } from '../pages/CreateAccount'
import { MyAccount } from '../pages/MyAccount'
import { MyOrders } from '../pages/MyOrders'
import Dashboard from '../pages/Dashboard'
import DashboardProducts from '../pages/Products'

function App () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Create-new-password' element={<CreateNewPassword />} />
        <Route path='/email-password' element={<EmailPassword />} />
        <Route path='/Password-recovery' element={<PasswordRecovery />} />
        <Route path='/Create-account' element={<CreateAccount />} />
        <Route path='/My-account' element={<MyAccount />} />
        <Route path='/My-orders' element={<MyOrders />} />
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='products' element={<DashboardProducts />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
