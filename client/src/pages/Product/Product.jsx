import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'



const Product = () => {

    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const {data, loading} = useFetch(`/products/find/${id}`);


    return(
        <div className="product">
            {loading ? "loading..." :(<><div className="left">
                <div className="images">
                    <img src={data.img} alt="" onClick={(e)=>setSelectedImg("img")}/>
                    <img src={data.img2} alt="" onClick={(e)=>setSelectedImg("img2")}/>
                    
                </div>
                <div className="mainImg">
                    <img src={data[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{data.title}</h1>
                <span className='price'>£{data.price}</span>
                <p>
                    {data.desc}
                </p>
                <div className="quantity">
                    <button onClick={()=> setQuantity(prev=>prev ===1 ? 1 : prev -1)}>-</button>
                        {quantity}
                    <button onClick={()=> setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add" onClick={() => dispatch(addToCart({
                    id: data._id,
                    title: data.title,
                    desc: data.desc,
                    price: data.price,
                    img: data.img,
                    quantity

                }))}>
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className="itme">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor:</span>
                    <span>Product Type:</span>
                    <span>Tag:</span>
                </div>
                <hr/>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div></>)}
        </div>
    )
}

export default Product