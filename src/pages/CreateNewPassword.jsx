// import React from "react"
import './CreateNewPassword.css'; 

export const CreateNewPassword = () => {
    return (
        <section className="new-password">
            <figure className="new-password__image-container">
                <img src="../assets/img/logo_yard_sale.svg" alt="Logo yard sale"/>
            </figure>
            <div className="new-password__text-container">
                <h1 className="form__h1">Create a new password</h1>
                <p>Enter a new password for your account</p>
            </div>
            <div className="new-password__form-container">
                <form action="#" className="new-password__form">
                    <label htmlFor="new-password" className="new-password__label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input__new-password"/>

                    <label htmlFor="reenter-password" className="new-password__label">Re-enter password</label>
                    <input type="password" id="reenter-password" placeholder="*********" className="input__new-password"/>

                    <input type="submit" value="Confirm" className="new-password__button"/>
                </form>
            </div>
        </section>
    )
}

