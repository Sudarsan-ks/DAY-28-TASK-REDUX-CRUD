import { useDispatch, useSelector } from "react-redux"
import { addToCart, infoHandle } from "../redux/cartslice"

export const Product = () => {
    const product = useSelector((state) => state.allCart.item)
    const info = useSelector((state) => state.allCart.info)

    const dispatch = useDispatch()

    const handleAddtoCart = (itemid) => {
        dispatch(addToCart(itemid))
    }

    const handleinfo = (itemid) => {
        dispatch(infoHandle(itemid))
    }

    return (
        <div className="product_container">
            {
                product.map((data) => {
                    return (
                        <div className="product" key={data.id}>
                            <div className="cardproduct" >
                                <div className="productimg">
                                    <img src={data.images} alt="img" />
                                </div>
                                <div className="producttitle_price">
                                    <div className="producttitle">{data.title}</div>
                                    <div className="productprice"> - Rs {data.price}</div>
                                </div>
                                <div className="productrating_des">
                                    <i className="fa fa-info" aria-hidden="true" onClick={() => handleinfo(data.id)} >{info[data.id] && <div className="productdescription">{data.description}</div>}</i>

                                    <div className="productrating">{data.rating}</div>
                                </div>
                                <div className="productbrand_category">
                                    <div className="productbrand">{data.brand} -</div>
                                    <div className="productcategory"> {data.category}</div>
                                </div>
                                <div className="productstock_dis">
                                    <div className="productstock">Avl stock - {data.stock}</div>
                                    <div className="productdiscount">Disc% - {data.discountPercentage}</div>
                                </div>
                                <div className="addbtn">
                                    <button onClick={() => handleAddtoCart(data)} >ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
