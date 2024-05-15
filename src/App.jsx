import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
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
