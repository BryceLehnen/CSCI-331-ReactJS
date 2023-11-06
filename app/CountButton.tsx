import {useState, useEffect} from "react"

export default function CountButton() {
    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count = count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <div>{count}</div>
        </div>
    )
}