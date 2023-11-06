import {useState, useEffect} from "react"

const SearchBar = (props) => {
    let [searchValue, setSearchValue] = useState("")
    //const rawProductData = await fetch("https://fakestoreapi.com/products/1")
    //const productData = rawProductData.json()

    function changeSearch(event) {
        setSearchValue(event.target.value)
    }

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={changeSearch} placeholder="Search products"></input>
            <ul>
                {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar