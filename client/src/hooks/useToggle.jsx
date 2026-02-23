import { useState } from "react";

export default function useToggle(flag){
    const [value, setValue] = useState(flag);

    function toggle(){
        setValue(!value)
    }

    function setTrue(){
        setValue(true)
    }

    function setFalse(){
        setValue(false)
    }

    return {value, toggle, setFalse, setTrue}
}