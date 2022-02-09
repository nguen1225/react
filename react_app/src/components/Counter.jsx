import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)

    const countUp = () => {
        setCount(prevState => prevState + 1)
    }

    const countDown = () => {
        setCount(prevState => prevState -1)
    }

    return (
        <div>
            <h2>
                カウンター
            </h2>
            <p>
                現在のカウント：{count}
            </p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    )
}

export default Counter