import './MyOrders.css';
import { MyOrdersCards } from '../components/MyOrdersCards';

export const MyOrders = () => {
    return (
        <section className="my-order__container">
            <h1>My orders</h1>
            <MyOrdersCards/>
        </section>
    )
}