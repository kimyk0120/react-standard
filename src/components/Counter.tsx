import styled from "styled-components";
import { useState } from "react";

const CounterContainer = styled.div`
    h1 {
        font-size: 2em;
    }
    button {
        margin-right: 1em;
    }
`;

/***
 * Counter
 */
function Counter() {
    // state
    // count : read-only ; 리드온리는 값을 대입하는 용도가 아님; setCount의 내부변수로 활용해야함
    // setCount : update
    const [count, setCount] = useState<number>(0);

    // event
    const handleOnClickIncrease = () => {
        setCount((prevState) => prevState + 1);
    };

    const handleOnClickDecrease = () => {
        setCount((prevState) => prevState - 1);
    };

    // view
    return (
        <CounterContainer>
            <hr />
            <h1>Counter : {count}</h1>
            <button onClick={handleOnClickIncrease}>+</button>
            <button onClick={handleOnClickDecrease}>-</button>
            <hr />
        </CounterContainer>
    );
}

export default Counter;
