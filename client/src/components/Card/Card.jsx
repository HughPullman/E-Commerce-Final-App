import React from "react";
import "./Card.scss";
import {Link} from "react-router-dom"


const Card = ({item}) =>{
    return (
        <Link className='link' to={`/hughstore/product/${item._id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2 || item.img} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>£{item.oldPrice || item.price + 15}</h3>
                    <h3>£{item.price}</h3>
                </div>
            </div>
        </Link>
        
    )
};

export default Card