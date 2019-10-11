import React, { useState, useEffect } from 'react'

const Test : React.FC = (props) => {
    // 声明多个 state 变量
    // const [age, setAge]     = useState(42);
    const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState([{text: 'Learn Hooks'}]);
    // const [isOnline, setIsOnline] = useState(null);
    
    useEffect(() => {
        console.log('props', props);
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Test