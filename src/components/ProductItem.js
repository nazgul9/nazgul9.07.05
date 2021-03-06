import React from 'react';
import { Link } from 'react-router-dom';
import ReadMoreReact from "read-more-react"

const ProductItem = ({ item }) => {
    return (

        <div className="col-3 mt-4 mb-4">
            <div className="card card-product">
                <img className="card-img-top card-product-img" src={item.img} alt="" />
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                    </h2>
                    <p className="card-text product-desc">
                    <ReadMoreReact min={20} ideal={30} max={40} text={item.description}/>
                        <p>
                            <Link to ={"/product/"+item.id} className="btn btn-primary mt-2">
                                Detail
                            </Link>
                            <span>
                                {item.price}$
                            </span>
                            
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;