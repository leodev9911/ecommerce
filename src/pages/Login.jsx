import './Login.css'
import { Logo } from '../components/Logo'
import { useAuth } from '../hooks/auth'

const classN = 'login__image-container'
export const Login = () => {
  const { handleChange, handleSubmit } = useAuth()

  return (
    <section className='login'>
      <Logo classN={classN} />
      <div className='login__form-container'>
        <form className='login__form' onSubmit={(event) => handleSubmit(event)}>
          <label
            htmlFor='email'
            className='login__label'
          >
            Email adress
          </label>
          <input
            type='text'
            name='email'
            placeholder='email@example.com'
            className='input__login'
            onChange={(event) => handleChange(event)}
          />
          <label
            htmlFor='login-password'
            className='login__label'
          >
            Password
          </label>
          <input
            type='password'
            name='loginPassword'
            placeholder='*********'
            className='input__login'
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
      <button className='signup__button'>Sign up</button>
    </section>
  )
}
