import React, { Component } from 'react';
import Rating from './Rating';
const Product = (props) => {
    const { product } = props;
    console.log(product)
    return (
        <div key={product._id} className="card" >
            <a href={`/product/${product._id}`}>
                <img src={product.image} className="medium" /></a>
            <div className="card-body">
                <a href={`/product/${product._id}`} />
                <h2 >{product.name}</h2>
                <Rating rating={product.rating}
                    numReviews={product.numReviews}
                />
                <div className="price">
                    120$
                </div>
            </div>
        </ div >
    );
}
export default Product;