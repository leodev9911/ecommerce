import './EmailPassword.css'
import  iconMail from '../assets/icons/mail.svg'
import { Logo } from '../components/Logo'

const classN = 'email-password__image-container'

export const EmailPassword = () => {
    return (
        <section className="email-password">
            <Logo classN={classN}/>
            <div className="email__text-container">
                <h1 className="email-password__h1">Email has been sent!</h1>
                <p>Please check your inbox for instructions on how to reset the password</p>
            </div>
            <figure className="password-recovery__email-logo-container">
                <img src={iconMail} alt=""/>
            </figure>
            <div className="button__container">
                <button className="send__button">Login</button>
                <p className="resend">
                    <span>Didn’t receive the email?</span>
                    <a href="">Resend</a>
                </p>
            </div>
        </section>
    )
}