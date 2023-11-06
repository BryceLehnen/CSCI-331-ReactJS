"use client"
import {useState, useEffect} from "react"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar"

export default function Page() {
    const [productsState, setProductsState] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProductsState([
                "example1",
                "example2",
                "example3",
                "example4",
                "example5",
            ])
        }, 2000)
    }, [])

    const hasProducts = productsState.length > 0

    return (
    <div>
        <CountButton increment={1} />
        <CountButton increment={2} />
        <hr />
        <a href="https://github.com/BryceLehnen/CSCI-331-ReactJS">The Github Repo for this ReactJS project</a>
        <hr />
        {hasProducts ? <SearchBar products={productsState}/> : "Loading products..."}
    </div>
    )
}
