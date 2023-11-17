import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useForms } from './useForms'

const AuthContext = createContext()

const LOGIN_URL = 'https://api.escuelajs.co/api/v1/auth/login'

export function AuthProvider ({ children }) {
  const { setOpenDropdownMenu, setOpenMobileMenu } = useContext(AppContext)
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState({
    accessToken: '',
    refreshTokenL: ''
  })
  const [formData, setFormData] = useState({
    email: {
      value1: '',
      error: false,
      errorMessage: ''
    },
    loginPassword: {
      value1: '',
      error: false,
      errorMessage: ''
    }
  })
  const { handleChange } = useForms(setFormData)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let isOneEmpty = false

    Object.keys(formData).forEach(input => {
      console.log(Object.keys(formData))
      if (formData[input].value1 === '') {
        isOneEmpty = true
        setFormData(prev => {
          return {
            ...prev,
            [input]: {
              value1: formData[input].value1,
              error: true,
              errorMessage: 'This field is recquired'
            }
          }
        })
      }
    })

    if (isOneEmpty) return

    try {
      const res = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email.value1,
          password: formData.loginPassword.value1
        })
      })
      const data = await res.json()
      setTokens(prev => {
        return {
          ...prev,
          accessToken: data.access_token,
          refreshToken: data.refresh_token
        }
      })

      const getUser = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          'Authorization': `Bearer ${data.access_token}`
        }
      })
      const user = await getUser.json()
      setUser(user)

      if (user) navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogOut = () => {
    setUser(null)
    setOpenDropdownMenu(false)
    setOpenMobileMenu(false)
  }

  const auth = {
    user,
    handleChange,
    handleSubmit,
    handleLogOut,
    formData
  }

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const auth = useContext(AuthContext)
  return auth
}
