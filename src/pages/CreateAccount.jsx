import { useState } from 'react'
import './CreateAccount.css'
import { useForms } from '../hooks/useForms'
import { useCreateAccount } from '../hooks/useCreateAccount'

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    createName: {
      value1: '',
      error: false,
      errorMessage: ''
    },
    createEmail: {
      value1: '',
      error: false,
      errorMessage: ''
    },
    createPassword: {
      value1: '',
      error: false,
      errorMessage: ''
    }
  })

  const { handleSumbmitCreateAccount } = useCreateAccount(formData, setFormData)
  const { handleChange } = useForms(setFormData)

  return (
    <section className='create-account'>
      <div className='create-account__text-container'>
        <h1 className='form__h1'>My account</h1>
      </div>
      <div className='create-account__form-container'>
        <form
          className='create-account__form'
        >
          <label
            htmlFor='name-account'
            className={`account__label ${formData.createName.error && 'error'}`}
          >
            Name
            {formData.createName.error && <p>{formData.createName.errorMessage}</p>}
          </label>
          <input
            type='text'
            id='name-account'
            placeholder='Leonardo Fernández'
            className={`input__account ${formData.createName.error && 'error'}`}
            onChange={(event) => handleChange(event)}
            name='createName'
          />

          <label
            htmlFor='email-account'
            className={`account__label ${formData.createEmail.error && 'error'}`}
          >
            Email address
            {formData.createEmail.error && <p>{formData.createEmail.errorMessage}</p>}
          </label>
          <input
            type='text'
            id='email-account'
            placeholder='leonardo@example.com'
            className={`input__account ${formData.createEmail.error && 'error'}`}
            onChange={(event) => handleChange(event)}
            name='createEmail'
          />

          <label
            htmlFor='account-password'
            className={`account__label ${formData.createPassword.error && 'error'}`}
          >
            Password
            {formData.createEmail.error && <p>{formData.createPassword.errorMessage}</p>}
          </label>
          <input
            type='password'
            id='account-password'
            placeholder='*********'
            className={`input__account ${formData.createPassword.error && 'error'}`}
            onChange={(event) => handleChange(event)}
            name='createPassword'
          />
        </form>
      </div>
      <div className='account-button__container'>
        <input
          type='submit'
          value='Create'
          className='account__button'
          onClick={(event) => handleSumbmitCreateAccount(event)}
        />
      </div>
    </section>
  )
}
