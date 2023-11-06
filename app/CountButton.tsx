import {useState, useEffect} from "react"

export default function CountButton({increment}) {
    let [count, setCount] = useState(0)

    function handleClick() {
        
        setCount(count = count + increment)
    }

    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }

    useEffect(rollOverCount, [count])

    return (
        <div>
            <button onClick={handleClick}>+{increment}</button>
            <div>{count}</div>
        </div>
    )
}