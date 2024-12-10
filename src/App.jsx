import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute ";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader"
import DashboardLayout from "./layout/DashboardLayout";
function App() {
  return (
    <>
      <Loader/>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        rtl={false}
        theme="dark"
      />
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout/>}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
