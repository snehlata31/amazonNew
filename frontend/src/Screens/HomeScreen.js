import React from 'react';
import Product from '../components/Product';
import data from '../data';
function HomeScreen(props) {
    return (
        <div>
            <div className="row center">
                {data.products.map((product) => (
                    <Product product={product}></Product>
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;