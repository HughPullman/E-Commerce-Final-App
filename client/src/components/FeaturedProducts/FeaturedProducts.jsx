import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'


const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?type=${type}`);
   

    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Don't judge each day by the harvest you reap but by the seeds 
                    that you plant.
                    -Robert Louis Stevenson<br/>
                    The future belongs to those who believe in the beauty of their 
                    dreams. 
                    -Eleanor Roosevelt<br/>
                    Do not go where the path may lead, go instead where there is 
                    no path and leave a trail. 
                    -Ralph Waldo Emerson
                </p>
            </div>
            <div className="bottom">
                {error ? "Something went wrong!" :(loading ? "loading" : data.map(item =>(
                    <Card item={item} key={item._id}/>
                )))}
            </div>
        </div>      
    )
}

export default FeaturedProducts