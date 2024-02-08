import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import {useSelector} from "react-redux"

const Navbar = () => {

    const products = useSelector(state => state.cart.products);

    const [open, setOpen] = useState(false);

    return(
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className='item'>
                        <img src='/hughstore/img/en.png' alt='' />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>GBP</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/hughstore/products/woman">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/hughstore/products/man">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/hughstore/products/children">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/hughstore/">HUGHSTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/hughstore/">Homepage</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <div>
                        <Link className='link' to="/hughstore/login-page"><PersonOutlineOutlinedIcon/></Link>
                        </div>
                        <FavoriteBorderOutlinedIcon/>
                        <div className="cartIcon" onClick={() =>setOpen(!open) }>
                            <ShoppingCartOutlinedIcon/>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar