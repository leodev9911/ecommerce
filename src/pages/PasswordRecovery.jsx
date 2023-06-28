import './PasswordRecovery.css'

export const PasswordRecovery = () => {
    return (
        <section className="email-password">
            <figure className="email-password__image-container">
                <img src="../assets/img/logo_yard_sale.svg" alt="Logo yard sale"/>
            </figure>
            <div className="email__text-container">
                <h1 className="email-password__h1">Password recovery</h1>
                <p>Inform the email addres used to create your account</p>
            </div>
            <form action="#" className="login__form">
                <label htmlFor="email" className="login__label">Email adress</label>
                <input type="text" id="email" placeholder="email@example.com" className="input__login"/>
                <div className="button__container">
                    <button type='submit' className="send__button">Submit</button>
                    <p className="resend">
                        <a href="">Back to log in</a>
                    </p>
                </div>
            </form>
        </section>
    )
}