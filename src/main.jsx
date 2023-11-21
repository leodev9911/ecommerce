import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { AuthProvider } from './hooks/auth'
import MenusProvider from './context/MenusContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MenusProvider>
      <AppProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppProvider>
    </MenusProvider>
  </BrowserRouter>
)
