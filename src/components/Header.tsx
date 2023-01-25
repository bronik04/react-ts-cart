import React from 'react';
import Nav from "./Nav";
import useCart from "../hooks/useCart";

type HeaderPropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart, setViewCart}: HeaderPropsType) => {
    const {totalPrice, totalItems} = useCart();
    const content = (
        <header className={'header'}>
            <div className={'header__title-bar'}>
                <h1>Acme. Co</h1>
                <div className={'header__nav-wrapper'}>
                    <div className={'header__price-box'}>
                        <p>Total Items: {totalItems}</p>
                        <p>Total Price: {totalPrice}</p>
                    </div>
                    <Nav viewCart={viewCart} setViewCart={setViewCart}/>
                </div>
            </div>
        </header>
    )
    return content;
};

export default Header;
