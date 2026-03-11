import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/form/InputField";
import { AuthContext } from "../../context/AuthContext";

const OTPNewPassword = () => {
  const { url } = useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${url}/api/auth/reset-password`,
        { otp, newPassword },
        { withCredentials: true },
      );

      const data = response.data;

      if (data.success) {
        toast.success("Password reset successfully");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <AuthLayout title={"Reset Password"}>
        <Form onSubmit={handleSubmit}>
          <InputField
            label={"Enter OTP"}
            type="text"
            placeholder="6-digit code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <InputField
            label={"New Password"}
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button variant="success" type="submit" className="w-100">
            Set New Password
          </Button>

          <p className="text-center mt-3">
            Remembered your password? <a href="/login">Login</a>
          </p>
        </Form>
      </AuthLayout>
    </>
  );
};

export default OTPNewPassword;
