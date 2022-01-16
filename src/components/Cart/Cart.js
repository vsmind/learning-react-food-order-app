import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'c1',
        name: 'Sushi',
        amount: '2',
        price: '9.99'
    }].map(item => <li key="c1">{item.name}</li>)}</ul>;

    const sendOrderHandler = () => {
      console.log(cartItems);
    };

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Ammout</span>
                <span>20</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button} onClick={sendOrderHandler}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;