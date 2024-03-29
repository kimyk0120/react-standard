import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Contents from "@/layout/Contents";
import Sidebar from "@/layout/Sidebar";
import styled from "styled-components";
import GlobalStyle from "@/style/GlobalStyle";
import Counter from "@/components/Counter";
import Input from "@/components/input";
import Calculator from "@/components/Calculator";
import Popup from "@/components/Popup";
import LiveClock from "@/components/LiveClock";
import ToDoList from "@/components/ToDoList";
import ToDoList_2 from "@/components/ToDoList_2";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

function App() {
    // js

    // view
    return (
        <>
            <br />
            <ToDoList_2></ToDoList_2>
            <br />
            {/*<ToDoList />*/}
            <br />
            <LiveClock />
            <br />
            <Popup content={"리액트 스터디"} btnTitle={"확인"} />
            <br />
            <Counter />
            <Input />
            <Calculator />
            {/* <Input /> */}
            {/* <GlobalStyle />
            <AppContainer>
                <Header title="Header" description={123} />
                <Sidebar title="Sidebar" />
                <Contents title="Contents" />
                <Footer title="Footer" />
            </AppContainer> */}
        </>
    );
}

export default App;
