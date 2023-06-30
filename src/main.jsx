import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './logic/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
     <BrowserRouter>
      <App/>
    </BrowserRouter>,
  </AppProvider>
)
