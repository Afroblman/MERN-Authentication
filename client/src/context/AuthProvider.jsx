import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/is-auth",
        {},
        { withCredentials: true },
      );
      if (res.data.success) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
