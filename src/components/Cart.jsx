import { useDispatch, useSelector } from "react-redux"
import { deleteCart, increase, decrease, setPrice } from '../redux/cartslice'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const Cart = () => {
    const cartitems = useSelector((state) => state.allCart.cart)
    const totalprice = useSelector((state) => state.allCart.totalPrice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (itemId) => {
        dispatch(deleteCart(itemId))
    }

    const handleIncrease = (itemId) => {
        dispatch(increase(itemId))
    }

    const handleDecrease = (itemId) => {
        dispatch(decrease(itemId))
    }

    const haldleprice = () => {
        dispatch(setPrice())
    }
    useEffect(() => {
        haldleprice()
        if (totalprice === 0) {
            navigate('/')
        }
    }, [haldleprice])


    return (
        <div className="cart_container">
            {
                cartitems.map((data) => {
                    return (
                        <div className="cart" key={data.id}>
                            <div className="cartimg">
                                <img src={data.images} alt="img" />
                            </div>
                            <div className="carttitle">{data.title}</div>
                            <div className="plusminusbtn">
                                <div className="plusbtn">
                                    <button onClick={() => handleIncrease(data.id)} >+</button>
                                </div>
                                <div className="totalquantity">{data.quantity}</div>
                                <div className="minusbtn">
                                    <button onClick={() => handleDecrease(data.id)} >-</button>
                                </div>
                            </div>
                            <div className="cartprice">{data.price}</div>
                            <div className="deletebtn">
                                <button onClick={() => handleDelete(data.id)} >REMOVE</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="total">
                <div className="totalprice">Total price of the cart - <span>{totalprice}</span></div>
            </div>
        </div>

    )
}
