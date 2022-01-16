import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const showCartHandler = () => {
        props.onShowCart(true);
    };

    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;