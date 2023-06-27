import './DropdownMenu.css'

export const DropdownMenu = () => {
    return (
        <div id="dropdown-menu" className="dropdown-menu__container inactive">
            <ul className="dropdown__list">
                <li><a href="">My order</a></li>
                <li><a href="">My account</a></li>
                <li><a href="" className="green-anchor">Sign out</a></li>
            </ul>
        </div>
    )
}