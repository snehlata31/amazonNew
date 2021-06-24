import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if (!product) {
        return <div>product not focund</div>
    }
    return (
        <div>
            <Link to="/">Back to Result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul className="unordered">
                        <li>{product.name}</li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>Price:${product.price}</li>
                        <li>Description:
                            <p>{product.description}</p></li>
                    </ul>
                </div>

                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div className="price">{product.countInStock > 0 ?
                                        (<span className="success">In a stock</span>) :
                                        (<span className="error">not in Stock
                                        </span>)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Qty</div>
                                    <div>
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <button className="button primary block">Add to Cart</button>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductScreen;