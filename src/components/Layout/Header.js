import classes from './Header.module.css';
import headerImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Meals App</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="A table full of food"/>
            </div>
        </>
    );
};

export default Header;