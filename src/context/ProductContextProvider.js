import React, {useState, useEffect} from 'react'
//API:
import { getProducts } from '../services/api'

const ProductContext = React.createContext();

function ProductContextProvider(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, [])


  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider