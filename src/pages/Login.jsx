import './Login.css'
import { Logo } from '../components/Logo'
import { useAuth } from '../hooks/auth'
import { Link, Navigate } from 'react-router-dom'

const classN = 'login__image-container'
export const Login = () => {
  const { handleChange, handleSubmit, formData } = useAuth()
  const { user } = useAuth()

  if (user) {
    return <Navigate to='/' />
  }

  return (
    <section className='login'>
      <Logo classN={classN} />
      <div className='login__form-container'>
        <form className='login__form' onSubmit={(event) => handleSubmit(event)}>
          <label
            htmlFor='email'
            className={`login__label ${formData.email.error && 'error'}`}
          >
            Email adress
            {formData.email.error && <p>{formData.email.errorMessage}</p>}
          </label>
          <input
            type='text'
            name='email'
            placeholder='email@example.com'
            className={`input__login ${formData.email.error && 'error'}`}
            onChange={(event) => handleChange(event)}
          />
          <label
            htmlFor='login-password'
            className={`login__label ${formData.loginPassword.error && 'error'}`}
          >
            Password
            {formData.loginPassword.error && <p>{formData.loginPassword.errorMessage}</p>}
          </label>
          <input
            type='password'
            name='loginPassword'
            placeholder='*********'
            className={`input__login ${formData.loginPassword.error && 'error'}`}
            onChange={(event) => handleChange(event)}
          />
          <button
            className='login__button'
            type='submit'
          >
            Log in
          </button>
          <a href=''>Forgot my password</a>
        </form>
      </div>
      <Link
        to='/Create-account'
        className='signup__button'
      >
        Sign up
      </Link>
    </section>
  )
}
