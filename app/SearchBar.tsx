import {useState, useEffect} from "react"

export default function SearchBar() {
    let [searchValue, setSearchValue] = useState("")

    function changeSearch(event) {
        setSearchValue(event.target.value)
    }

    return (
        <div>
            <input type="text" value={searchValue} onChange={changeSearch} placeholder="Search products"></input>
            
        </div>
    )
}