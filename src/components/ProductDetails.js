
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

//Context:
import { ProductsContext } from '../context/ProductContextProvider'

function ProductDetails(props) {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  // const productIndex = data.findIndex(item => item.id == id)
  // const product = data[productIndex]
  const product = data[id - 1]
  const {image, title, description, price, category} = product
  
  return (
    <div>
        <img src={image} alt="product" style={{width: "200px"}} />
        <div>
            <h3>{title}</h3>
            <p> {description} </p>
            <p> <span>Category:</span> {category} </p>
            <div>
                <span>{price} $</span>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails