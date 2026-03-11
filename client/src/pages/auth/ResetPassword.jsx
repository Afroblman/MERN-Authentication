import axios from "axios";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/form/InputField";
import SubmitButton from "../../components/form/SubmitButton";
import { AuthContext } from "../../context/AuthContext";

const ResetPassword = () => {
  const { url } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${url}/api/auth/send-password-reset-otp`,
        { email },
        {
          withCredentials: true,
        },
      );

      const data = response.data;

      if (data.success) {
        toast.success("Password reset OTP sent to your email");
        setTimeout(() => navigate("/otp-new-password"), 1500);
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
            label={"Email address"}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton text={"Send OTP"} />

          <p className="text-center mt-3 texsu">
            Remembered your password?{" "}
            <a href="/login" className="text-success">
              Login
            </a>
          </p>
        </Form>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
