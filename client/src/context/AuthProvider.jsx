import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const url = import.meta.env.BACKEND_URL;

  const checkAuth = async () => {
    try {
      const res = await axios.post(
        `${url}/api/auth/is-auth`,
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
    <AuthContext.Provider value={{ isAuth, url, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
