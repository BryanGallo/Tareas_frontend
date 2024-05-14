import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
