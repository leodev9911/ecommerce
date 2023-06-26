import './EmailPassword.css'

export const EmailPassword = () => {
    return (
        <section className="email-password">
            <figure className="email-password__image-container">
                <img src="../assets/img/logo_yard_sale.svg" alt="Logo yard sale"/>
            </figure>
            <div className="email__text-container">
                <h1 className="email-password__h1">Email has been sent!</h1>
                <p>Please check your inbox for instructions on how to reset the password</p>
            </div>
            <figure className="password-recovery__email-logo-container">
                <img src="../assets/icons/mail.svg" alt=""/>
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