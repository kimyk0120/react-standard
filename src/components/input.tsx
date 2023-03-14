import styled from "styled-components";
import { ChangeEvent, useState, useEffect } from "react";

const Wrap = styled.div`
    padding-top: 2em;
`;

/**
 *
 */
function Input() {
    // state
    const [inputValue, setInputValue] = useState<string>("");

    // event
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    // watch (func, [])
    // 두번때 인자의 공백 배열을 넣을 경우 wondow.onload와 같은 역할을 함
    // 두번때 인자가 없을 경우 이벤트 발생시에 계속 발생됨
    useEffect(() => {
        console.log(new Date() + " : " + inputValue);
    }, [inputValue]);

    // view
    return (
        <Wrap>
            <hr />
            <h1>Input : {inputValue}</h1>
            <input value={inputValue} onChange={handleOnChange} />
            <hr />
        </Wrap>
    );
}

export default Input;
