import axios from "axios";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/form/InputField";
import SubmitButton from "../../components/form/SubmitButton";
import { AuthContext } from "../../context/AuthContext";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { url, checkAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${url}/api/auth/verify-account`,
        { otp },
        { withCredentials: true },
      );

      const data = response.data;

      if (data.success) {
        toast.success("Verified Successfully");
        await checkAuth();
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <AuthLayout title={"Verify Your Email"}>
        <Form onSubmit={handleSubmit}>
          <InputField
            label={"Enter OTP"}
            type={"text"}
            placeholder={"6-digit code"}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <SubmitButton text={"Verify Email"} />
          <p className="text-center mt-3">Didn’t receive the code?</p>
        </Form>
      </AuthLayout>
    </>
  );
};

export default VerifyEmail;
