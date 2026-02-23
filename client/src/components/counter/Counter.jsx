import useCounter from "../../hooks/useCounter"

function Counter() {
    const { num, reset, inc, dec } = useCounter(10)

    return (
        <div>
            <h2>{num}</h2>
            <button onClick={reset}>reset</button>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
        </div>
    )
}

export default Counter
