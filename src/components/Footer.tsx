import React from 'react';
import useCart from "../hooks/useCart";

type PropsType = {
    viewCart: boolean
}

const Footer = ({viewCart}: PropsType) => {
    const {totalPrice, totalItems} = useCart();
    const year: number = new Date().getFullYear()
    const pageContent = viewCart
        ? <p>Sopping cart &copy; {year}</p>
        :
        <>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Shopping Cart &copy; {year}</p>
        </>
    return (
        <footer className={'footer'}>
            {pageContent}
        </footer>
    );
};

export default Footer;
