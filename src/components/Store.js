import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./Store.module.css";

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className="flex flex-wrap justify-center items-center pt-28 mt-20 px-36 bg-black/20 bg-blend-overlay" >
            {
                products.map(product => <Product 
                        key={product.id} 
                        productData = {product}
                    />)
            }
        </div>
    );
};

export default Store;