import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Contents from "@/layout/Contents";
import Sidebar from "@/layout/Sidebar";

function App() {
    // js

    // view
    return (
        <>
            <Header title="Header" description={123} />
            <Sidebar title="Sidebar" />
            <Contents title="Contents" />
            <Footer title="Footer" />
        </>
    );
}

export default App;
