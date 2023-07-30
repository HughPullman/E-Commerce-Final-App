import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/17670523/pexels-photo-17670523/free-photo-of-women-posing-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/17670514/pexels-photo-17670514/free-photo-of-women-posing-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Black lace Crop-top",
            isNew: true,
            oldPrice: 20,
            price: 12,
        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Yellow Tracksuit",
            isNew: true,
            oldPrice: 50,
            price: 40,
        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Cream Cotton Oversized Shirt",
            isNew: false,
            oldPrice: 25,
            price: 12,
        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Cream Cotton Oversized Shirt",
            isNew: false,
            oldPrice: 22,
            price: 15,
        },
    ]

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
                {data.map(item =>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>      
    )
}

export default FeaturedProducts