import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products);
    const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
   }

    return (
        <div className="cart">
            <h1>Product in your Cart</h1>
            {products?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">{item.quantity} x £{item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" onClick={()=> dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>£{totalPrice()}</span>
            </div>
            <StripeCheckout
                name="HUGHSTORE"
                desc="Clothing for you"
                amount={totalPrice()}
                currency="GBP"
            >
                <button>PROCEED TO CHECKOUT</button>
            </StripeCheckout>
            
            <span className="reset" onClick={()=> dispatch(resetCart())}>RESET CART</span>
        </div>
    );
};

export default Cart
