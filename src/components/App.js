import React, { useEffect, useState } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'

const App = () => {

    const [productsState, setProductsState] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductState)
            })

    }, [])

    const hasProduct = productsState.length >0

    return (
     <div>
         <Button>Hello World</Button>
         <Button>Hello World2</Button>
         <Button>Hello World3</Button>
         <CountButton incrementBy={1} buttonColor="blue" />
         {hasProduct ? <SearchBar products = {productsState} />: "Loading"}
     </div>
    )
    
  }

  export default App 