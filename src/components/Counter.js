import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count === 0){
            setCount(0)
        } else{
        setCount(count-1)
        }
    }

    return (
        <div>
            <h5>Count: {count} </h5>
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
        </div>
    )
}

export default Counter;