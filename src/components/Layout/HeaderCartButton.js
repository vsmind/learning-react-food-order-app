import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const showCartHandler = () => {
        props.onShowCart(true);
    };

    const cartContext = useContext(CartContext);
    const {items} = cartContext;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const buttonClass = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300);
        // Clean up function for useEffect
        return () => {
            clearTimeout(timer)
        };
    }, [items]);

    return (
        <button className={buttonClass} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon/>
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