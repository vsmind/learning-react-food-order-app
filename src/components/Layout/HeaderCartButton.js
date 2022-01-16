import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {

    const showCartHandler = () => {
        props.onShowCart(true);
    };

    return (
        <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
}

export default HeaderCartButton;