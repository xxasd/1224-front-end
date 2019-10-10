import React, { useEffect, useReducer } from 'react'
// import Button from 'antd/lib/button'

const MainWrapper: React.FC = () => {
    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState(1);
    // const latestCount = useRef(count);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        // latestCount.current = count;
        // setTimeout(() => {
        //     console.log(`You clicked ${count} times`);
        //     console.log(`You clicked2 ${latestCount.current} times`);
        // }, 3000);
        const id = setInterval(() => {
            // setCount(c => c + step)
            dispatch({ type: 'tick', step: 0 });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div>
            <h1>{count}</h1>
            <input 
                value={step} onChange={e => {
                    dispatch({
                        type: 'step',
                        step: Number(e.target.value)
                    })
                }} type="text"/>
        </div>
    )
}

interface action extends Object {
    type: string,
    step: number
}

interface IinitialState extends Object {
    count: number,
    step: number,
}

const initialState = {
    count: 0,
    step: 1,
}

function reducer(state: IinitialState, action: action): IinitialState {
    const { count, step } = state;
    if(action.type === 'tick') {
        return { count: count + step, step };
    } else if(action.type === 'step') {
        return { count, step: action.step };
    } else {
        throw new Error();
    }
}

export default MainWrapper;