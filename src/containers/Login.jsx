export const Login = () => {
    return (
        <section className="login">
            <figure className="login__image-container">
                <img src="./assets/img/logo_yard_sale.svg" alt="Logo yard sale"/>
            </figure>
            <div className="login__form-container">
                <form action="#" className="login__form">
                    <label htmlFor="email" className="login__label">Email adress</label>
                    <input type="text" id="email" placeholder="email@example.com" className="input__login"/>

                    <label htmlFor="login-password" className="login__label">Password</label>
                    <input type="password" id="login-password" placeholder="*********" className="input__login"/>

                    <input type="submit" value="Log in" className="login__button"/>
                    <a href="">Forgot my password</a>
                </form>
            </div>
            <button className="signup__button">Sign up</button>
        </section>
    )
}