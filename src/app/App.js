import React from 'react';
import ProductList from '../components/ProductList'
import ProductDetail from '../components/ProductDetail'
import { Route } from "react-router-dom"




const App = () => {

    return (
        <div>
            <div className="container border shadow-sm  mt-4">
                <Route path="/" exact>
                    <ProductList />
                </Route>
                <Route path="/product/:id" exact>
                    <ProductDetail />
                </Route>
            </div>
        </div>
    );
};




export default App;

