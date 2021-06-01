import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((products) => {
            return products.includes(searchValue)
        })
    

    return<div>
        <input type="text" value={searchValue}  onChange={handleInputChange} />
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

        <ul>
        {filteredProducts.map((products) => {
            return <li key={products}>{products}</li>
        })}
        </ul>
    </div>
}

export default SearchBar