import React from "react";
import "./List.scss"
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({subCategories, maxPrice, sort, catId}) => {

    const {data, loading} = useFetch(`/products?category=${catId}&subCategory=${subCategories.join(",")}&price=${maxPrice}&sort=${sort}`);
    
    return (
        <div className="list">
            {loading ? "loading" :data?.map(item=>(
            <Card item={item} key={item._id} />))}
        </div>
    )
};

export default List