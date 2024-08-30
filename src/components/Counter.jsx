import React from 'react';

const Counter = () =>
{
    const [counter, setCounter] = React.useState(0);

    function increm()
    {
        setCounter(counter + 1)
    }
    function decrem()
    {
        setCounter(counter - 1)
    }
    return (
        <div className="counter">
            <h1>{counter}</h1>
            <button onClick={increm}>+</button>
            <button onClick={decrem}>-</button>
        </div>
    )
}

export default Counter;