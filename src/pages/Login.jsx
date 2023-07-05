import { useRef } from 'react'
import './Login.css'
import { Logo } from '../components/Logo'

const classN = 'login__image-container'

export const Login = () => {
    const form = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current)
        const data = {
            username: formData.get('email'),
            password: formData.get('login-password')
        }
        console.log(data)
    }

    return (
        <section className="login">
            <Logo classN={classN}/>
            <div className="login__form-container">
                <form action="#" className="login__form" ref={form}>
                    <label htmlFor="email" className="login__label">Email adress</label>
                    <input type="text" name="email" placeholder="email@example.com" className="input__login"/>
                    <label htmlFor="login-password" className="login__label">Password</label>
                    <input type="password" name="login-password" placeholder="*********" className="input__login"/>
                    <button 
                        className="login__button" 
                        onClick={handleSubmit}
                    >
                        Log in
                    </button>
                    <a href="">Forgot my password</a>
                </form>
            </div>
            <button className="signup__button">Sign up</button>
        </section>
    )
}