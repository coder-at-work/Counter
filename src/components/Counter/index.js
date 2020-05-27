import React, { useState, useEffect } from "react";
import './counter.css';

const Counter = () => {
    const [error, setError] = useState(null);
    const [counter, setCounter] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // For fetching the initial counter value
        fetch('https://5eccfda07c528e00167ccf2d.mockapi.io/getCounter').then(res => res.json()).then(data => {
            setCounter(data.count);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setCounter(0);
            setLoading(false);
        });
    }, []);

    const upHandler = () => {
        setCounter(counter + 1);
    };
    const downHandler = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
    };
    return (
        <div className="counter-wrapper">
            {error && <h1 className='error'>Error occured in fetching counter value, defaulting it to 0</h1>}
            {loading ? <h1 className='loading'>Loading initial counter value...</h1> : <div>
                <h1>Counter</h1>
                <div className='counter'>
                    <button onClick={downHandler}>-</button>
                    <div className='counter-value'>{counter}</div>
                    <button onClick={upHandler}>+</button>
                </div>
            </div>
            }

        </div>
    );
};

export default Counter;
