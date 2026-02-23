import { useState } from "react";

export default function useCounter(number){
    const [num, setNum] = useState(number);

    function reset(){
        setNum(0)
    }

    function inc(){
        setNum(num + 1)
    }

    function dec(){
        setNum(num - 1)
    }

    return {num, reset, inc, dec}
}