import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {

    }

    const cartItemAddHandler = (item) => {

    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartContext.items.map(item =>
            <CartItem key={item.id}
                      name={item.name}
                      price={item.price}
                      amount={item.amount}
                      onRemove={cartItemRemoveHandler.bind(null, item.id)}
                      onAdd={cartItemAddHandler.bind(null, item)}
            />
        )}
    </ul>;

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0

    const sendOrderHandler = () => {
        console.log(cartItems);
    };

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Ammout</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button} onClick={sendOrderHandler}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;