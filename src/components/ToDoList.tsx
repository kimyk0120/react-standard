import styled from "styled-components";
import {ChangeEvent, useState} from "react";

const InputArea = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
`;

const TodoItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TodoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    height: 20px;
    width: 20px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Task = styled.span<{ completed: boolean }>`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const AddButton = styled(Button)`
    margin-left: 10px;
    background-color: #17a2b8;
    color: #fff;
`;

const DeleteButton = styled(Button)`
    background-color: #dc3545;
    color: #fff;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;

    &:focus {
        outline: none;
        border-color: #17a2b8;
    }
`;

/**
 * @description 할 일 목록
 */
function TodoList() {
    // state
    const [list, setList] = useState<string[]>(["a","b","c","d"]);
    const [inputVal, setInputVal] = useState<string>("");

    // event
    const onInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setInputVal(value);
    }
    const addList = () => {
        setList((prevState) =>
            {return prevState.concat(inputVal)}  // 불변성을 유지하기 위해 concat을 사용함 또는 [...prevState, inputVal]
        )
        setInputVal("");
    }

    // view
    return (
        <Wrapper>
            <Title>Todo List</Title>
            {/*<form>*/}
                <InputArea>
                    <Input type="text" placeholder="할 일을 입력해주세요." value={inputVal} onChange={onInputChange} />
                    <AddButton onClick={addList}>Add</AddButton>
                </InputArea>
            {/*</form>*/}
            <TodoItems>
                {list.map((item)=>(
                        <TodoItem>
                            <Flex>
                                <Checkbox />
                                <Task completed={false}>{item}</Task>
                            </Flex>
                            <div>
                                <DeleteButton>Delete</DeleteButton>
                            </div>
                        </TodoItem>
                    )
                )}
            </TodoItems>
        </Wrapper>
    );
}

export default TodoList;
