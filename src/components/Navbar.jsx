import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.allCart.cart)
    const warning = useSelector((state) => state.allCart.warning)

    return (
        <div className="navbar_container">
            <div className="navbar">
                <div className="myproduct" onClick={() => navigate('/')} >My Shopping</div>
                <div className="mycart"><i className="fa fa-shopping-cart" aria-hidden="true" onClick={() => {
                    navigate('/cart')
                    if(cart.length===0){
                        alert("Please select the product to view the cart")
                    }
                }} >{cart.length}</i></div>
            </div>
        </div>

    )
}


