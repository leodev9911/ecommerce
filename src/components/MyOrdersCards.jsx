import './MyOrdersCards'
import path from '../assets/icons/path.svg'

export const MyOrdersCards = () => {
    return (
        <article className="total-card__container">
            <div className="left-text__container">
                <span>13.05.2023</span>
                <span className="articles">6 articles</span>
            </div>
            <div className="right-text__container">
                <p>160.00</p>
                <img src={path} alt=""/>
            </div>
        </article>
    )
}