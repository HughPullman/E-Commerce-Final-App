import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'



const Products = () => {

    const catId = (useParams().id);
    const [maxPrice, setmaxPrice] = useState(200);
    const [sort, setSort] = useState(null);
    const [selectedCat, setSelectedCat] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedCat(isChecked 
            ? [...selectedCat, value] : 
            selectedCat.filter((item) => item!== value)
            );
    };
    
    return(
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="input">
                        <input type="checkbox" id="top" value="top" onChange={handleChange}/>
                        <label htmlFor='1'>Tops</label>
                    </div>
                    <div className="input">
                        <input type="checkbox" id="bottom" value="bottom" onChange={handleChange}/>
                        <label htmlFor='1'>Bottoms</label>
                    </div>
                    <div className="input">
                        <input type="checkbox" id="bottom" value="accessories" onChange={handleChange}/>
                        <label htmlFor='1'>Accessories</label>
                    </div>
                    <div className="input">
                        <input type="checkbox" id="bottom" value="shoe" onChange={handleChange}/>
                        <label htmlFor='1'>Shoes</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>£0</span>
                        <input type="range" min={0} max={200} step={5} onChange={(e)=>setmaxPrice(e.target.value)}/>
                        <span>£{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='catImg' src="https://images.pexels.com/photos/1574670/pexels-photo-1574670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCategories={selectedCat}/>
            </div>
        </div>
    )
}

export default Products