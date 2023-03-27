import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;

const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;

    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;

const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;

const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;

/**
 * @description 계산기 컴포넌트
 */
function Calculator() {
    // var
    let firstNum = '';
    let operatorForAdvanced = '';
    let previousKey = '';
    let previousNum = '';

    // state
    const [num, setNum] = useState<string>("0");

    // event
    const onAddNum = (e: any) => {
        console.log(e.currentTarget.textContent);
        const innerTextNum = e.currentTarget.textContent;
        if (num === "0") {
            setNum((prevState) => "");
        }
        setNum((prevState) => prevState + innerTextNum);
    };

    const onDelete = (e: any) => {
        if (num === "0") {
            return;
        }

        setNum((prevState) => prevState.slice(0, -1));
        console.log(num.length);
        if (num.length <= 1) {
            onAllClear(e);
        }
    };

    const onAllClear = (e: any) => {
        setNum("0");
    };

    const onAddOperator = (operator: string) => {
        setNum((prevState) => prevState + operator);
    };

    const onResult = (e: any) => {
        console.log(num);
    };

    function calculate(n1:number, operator:string, n2:number) {
        let result = 0;
        if(operator === '+') {
            result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
        }
        else if(operator === '-') {
            result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
        }
        else if(operator === '*') {
            result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
        }
        if(operator === '/') {
            result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
        }
        return String(result);
    }



    // view
    return (
        <MainContainer>
            <InputBar readOnly value={num} />
            <ButtonContainer>
                <Button onClick={onAllClear}>AC</Button>
                <Button onClick={onDelete}>DEL</Button>
                <CalButton onClick={() => onAddOperator("%")}>%</CalButton>
                <CalButton onClick={() => onAddOperator("/")}>÷</CalButton>
                <Button onClick={onAddNum}>7</Button>
                <Button onClick={onAddNum}>8</Button>
                <Button onClick={onAddNum}>9</Button>
                <CalButton onClick={() => onAddOperator("*")}>×</CalButton>
                <Button onClick={onAddNum}>4</Button>
                <Button onClick={onAddNum}>5</Button>
                <Button onClick={onAddNum}>6</Button>
                <CalButton onClick={() => onAddOperator("-")}>-</CalButton>
                <Button onClick={onAddNum}>1</Button>
                <Button onClick={onAddNum}>2</Button>
                <Button onClick={onAddNum}>3</Button>
                <CalButton onClick={() => onAddOperator("+")}>+</CalButton>
                <ZeroButton onClick={onAddNum}>0</ZeroButton>
                <Button onClick={onAddNum}>.</Button>
                <CalButton onClick={onResult}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default Calculator;
