import React, { useState } from "react";
function UseState() {
    const [count, setCount] = useState(0);
    console.log('render');
    const increment = function(){
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        // setCount((preCount) => preCount + 1);
        // setCount((preCount) => preCount + 1);
        // setCount((preCount) => preCount + 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseState;