import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";


function App() {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
    )
}

export default App
