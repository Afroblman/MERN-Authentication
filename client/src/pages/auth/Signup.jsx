import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../../components/layout/AuthLayout.jsx";
import InputField from "../../components/form/InputField.jsx";
import SubmitButton from "../../components/form/SubmitButton.jsx";
import { AuthContext } from "../../context/AuthContext.js";

const Signup = () => {
  const { url } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${url}/api/auth/register`,
        { name, email, password },
        { withCredentials: true },
      );

      const data = response.data;

      if (data.success) {
        toast.success("Registration successful");

        await axios.post(
          `${url}/api/auth/send-verify-otp`,
          {},
          {
            withCredentials: true,
          },
        );

        toast.success("Verification OTP send to your email");
        setTimeout(() => navigate("/verify-email"), 1500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthLayout title={"Create Account"}>
        <Form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton text={"Sign up"} />
        </Form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="hover-underline text-success">
            Login
          </a>
        </p>
      </AuthLayout>
    </>
  );
};

export default Signup;
