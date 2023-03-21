import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Contents from "@/layout/Contents";
import Sidebar from "@/layout/Sidebar";
import styled from "styled-components";
import GlobalStyle from "@/style/GlobalStyle";
import Counter from "@/components/Counter";
import Input from "./components/input";
import Calculator from "./components/Calculator";

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
