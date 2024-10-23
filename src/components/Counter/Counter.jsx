import { useState } from 'react'

import './Counter.css'

function Counter(props) {

    // let name = "PAN"
    // let value = props.value

    // get , set
    const [value, setValue] = useState(props.value || 0);

    // เขียนแบบย่อ 
    // function 
    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    // เขียนแบบเต็ม
    // function increment() {
    //     // value = value + 1
    //     setValue(value + 1)
    //     // console.log(value)
    // }

    // function decrement() {
    //     // value = value - 1
    //     setValue(value - 1)
    //     // console.log(value)
    // }

    return (
        <div className='counter-container'>
            
                <h3 className='counter-title'>{props.name || 'Counter'}</h3>
                <div className="counter-controls">
                    <button className='btn btn-danger' onClick={decrement}>-</button>
                    <span className='counter-value'>{value}</span>
                    <button className='btn btn-success' onClick={increment}>  + </button>
                </div>
        </div>
    );
}

export default Counter;