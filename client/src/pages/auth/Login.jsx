import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout.jsx";
import InputField from "../../components/form/InputField.jsx";
import SubmitButton from "../../components/form/SubmitButton.jsx";
import { AuthContext } from "../../context/AuthContext.js";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { checkAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true },
      );

      const data = response.data;

      if (data.success) {
        toast.success("Login successfuly");
        await checkAuth();
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthLayout title={"Login"}>
        <Form onSubmit={handleSubmit}>
          <InputField
            label={"Email address"}
            type={"email"}
            placeholder={"Enter email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label={"Password"}
            type={"password"}
            placeholder={"Enter password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="mt-3">
            <a href="/reset-password" className="hover-underline text-success">
              Forgot password?
            </a>
          </p>
          <SubmitButton text={"Login"} />
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <a href="/signup" className="hover-underline text-success">
              Signup
            </a>
          </p>
        </Form>
      </AuthLayout>
    </>
  );
};

export default Login;
