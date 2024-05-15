import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Auth/Login";
import ForgotPassword from "./views/Auth/ForgotPassword"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route
                        path="auth/forgot-password"
                        element={<ForgotPassword />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
