import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import OTPNewPassword from "./pages/auth/OtpNewPassword";
import Signup from "./pages/auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/ui/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";

const App = () => {
  const { isAuth, loading } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (loading) {
      return (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status" />
        </div>
      );
    }

    return isAuth ? children : <Navigate to="/" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-new-password" element={<OTPNewPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
