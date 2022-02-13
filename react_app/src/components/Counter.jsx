import { useEffect, useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    const countUp = () => {
        setCount(prevState => prevState + 1)
    }

    const countDown = () => {
        setCount(prevState => prevState -1)
    }

    const count2Up = () => {
        setCount2(prevState => prevState + 2)
    }

    const count2Down = () => {
        setCount2(prevState => prevState -2)
    }

    // 毎回レンダリングされるごとに実行される
    useEffect(() => {
        console.log("毎回実行される", count)
    })

    // 初回レンダリング後(それ以降は実行されない)のみ実行される
    useEffect(() => {
        console.log("レンダリング後のみ実行される", count)
    }, [])

    // countが変更される度に実行される
    useEffect(() => {
        console.log("現在のカウント数は", count)
    }, [count])

    // count1かcount2が変更される度に実行される
    // useEffect(() => {
    //     console.log("現在のカウント数は", count)
    // }, [count1, count2])

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
            <h2>
                カウンター2
            </h2>
            <p>
                現在のカウント：{count2}
            </p>
            <button onClick={count2Up}>up</button>
            <button onClick={count2Down}>down</button>
        </div>
    )
}

export default Counter