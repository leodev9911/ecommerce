import { useNavigate } from 'react-router-dom'

export function useCreateAccount (formData, setFormData) {
  const { navigate } = useNavigate()
  let isOneEmpty = false

  const handleSumbmitCreateAccount = async (event) => {
    event.preventDefault()

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
      const res = await fetch('https://api.escuelajs.co/api/v1/users')

      const response = await res.json()
      const isAvailable = response.find(user => user.email === formData.createEmail.value1)

      if (isAvailable !== undefined) {
        setFormData(prev => {
          return {
            ...prev,
            createEmail: {
              value1: formData.createEmail.value1,
              error: true,
              errorMessage: 'This email is already registered'
            }
          }
        })
        return
      }
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.createName.value1,
          email: formData.createEmail.value1,
          password: formData.createPassword.value1,
          avatar: 'https://i.imgur.com/yhW6Yw1.jpg'
        })
      })

      const response = await res.json()
      if (response) navigate('/Login')
    } catch (error) {
      console.log(error)
    }
  }

  return { handleSumbmitCreateAccount }
}
