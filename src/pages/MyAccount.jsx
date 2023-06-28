export const MyAccount = () => {
    return (
        <section className="my-account">
            <div className="my-account__text-container">
                <h1 className="form__h1">My account</h1>
            </div>
            <div className="my-account__form-container">
                <form action="#" className="my-account__form">
                    <label htmlFor="name-account" className="account__label">Name</label>
                    <input type="text" id="name-account" placeholder="Leonardo Fernández" className="input__account"/>

                    <label htmlFor="email-account" className="account__label">Email address</label>
                    <input type="text" id="email-account" placeholder="leonardo@example.com" className="input__account"/>

                    <label htmlFor="account-password" className="account__label">Password</label>
                    <input type="password" id="account-password" placeholder="*********" className="input__account"/>
                </form>
            </div>
            <div className="account-button__container">
                <input type="submit" value="Edit" className="account__button"/>
            </div>
        </section>
    )
}