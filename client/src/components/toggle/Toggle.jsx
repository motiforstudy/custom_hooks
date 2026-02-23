import useToggle from "../../hooks/useToggle"

function Toggle() {

    const {value, toggle, setFalse, setTrue} = useToggle(false)

    return (
        <div>
            <h2>{String (value)}</h2>
            <button onClick={toggle}>toggle</button>        
            <button onClick={setFalse}>set false</button>        
            <button onClick={setTrue}>set true</button>        
        </div>
    )
}

export default Toggle
