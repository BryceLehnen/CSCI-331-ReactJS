import {useState, useEffect} from "react"
import './table.css'

const SearchBar = (props) => {
    let [searchValue, setSearchValue] = useState("")
    //const rawProductData = await fetch("https://fakestoreapi.com/products/1")
    //const productData = rawProductData.json()

    function changeSearch(event) {
        setSearchValue(event.target.value)
    }

    const filteredProducts = props.products.filter((product) => {
        if (product.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return product.title
        }
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={changeSearch} placeholder="Search products"></input>
            <table>
                <tbody>
                    {
                        filteredProducts.map((product) => {
                            return (
                                <tr key={product.title}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td><img src={product.image} alt="oopsie daisy"/></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default SearchBar