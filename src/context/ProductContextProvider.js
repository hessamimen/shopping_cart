import React, {useState, useEffect} from 'react'
//API:
import { getProducts } from '../services/api'

export const ProductsContext = React.createContext();

function ProductContextProvider({children}) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, [])


  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductContextProvider