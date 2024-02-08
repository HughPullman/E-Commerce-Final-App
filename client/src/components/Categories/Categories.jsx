import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to="/hughstore/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to="/hughstore/products/1">Accessories</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to="/hughstore/products/1">New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                        <Link className='link' to="/hughstore/products/1">Men</Link>
                        </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/17676251/pexels-photo-17676251/free-photo-of-young-woman-standing-in-front-of-an-old-building.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                        <Link className='link' to="/hughstore/products/1">Women</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/1800055/pexels-photo-1800055.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to="/hughstore/products/1">Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories