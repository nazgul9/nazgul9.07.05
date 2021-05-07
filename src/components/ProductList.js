import React from 'react';
import { connect } from "react-redux"
import ProductItem from './ProductItem'

const ProductList = ({ state }) => {
    return (
        <div>
            <h1 className="text-center">hello</h1>
            <div className="row">
                {state.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
const msp = (state) => {
    return { state }
}

export default connect(msp)(ProductList);