import { createContext, useContext, useEffect, useState } from 'react'
import { useForms } from './useForms'

const AuthContext = createContext()

const LOGIN_URL = 'https://api.escuelajs.co/api/v1/auth/login'

export function AuthProvider ({ children }) {
  useEffect(() => {
    const isLoggedUser = window.localStorage.getItem('loggedUserEcommerce')
    if (isLoggedUser) {
      const user = JSON.parse(isLoggedUser)
      setUser(user)
    }
  }, [])

  const [user, setUser] = useState(null)
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

      const getUser = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          'Authorization': `Bearer ${data.access_token}`
        }
      })
      if (getUser.status === 200) {
        const userFromApi = await getUser.json()

        window.localStorage.setItem(
          'loggedUserEcommerce', JSON.stringify({
            name: userFromApi.name,
            password: userFromApi.password,
            email: userFromApi.email,
            role: userFromApi.role,
            accessToken: data.access_token
          })
        )

        setUser({
          name: userFromApi.name,
          password: userFromApi.password,
          email: userFromApi.email,
          role: userFromApi.role,
          accessToken: data.access_token
        })
      } else {
        setFormData(prev => {
          return {
            ...prev,
            email: {
              value1: formData.email.value1,
              error: true,
              errorMessage: 'No accounts with this email'
            }
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedUserEcommerce')
    setUser(null)
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
