import logo from '../assets/img/logo_yard_sale.svg'

export const Logo = ({ classN }) => {
    return (
        <figure className={classN}>
            <img src={logo} alt="" />
        </figure>
    )
}