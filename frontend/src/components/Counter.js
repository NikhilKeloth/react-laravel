import React from "react";
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const {count, increment, decrement} = useCounter();

    return (
        <div>
            <h2> Count :-  {count} </h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;