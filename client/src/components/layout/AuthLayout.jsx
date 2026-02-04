const AuthLayout = ({ title, children }) => {
  return (
    <div className="mt-4">
      <a href="/" className="d-block text-center mb-0  fs-4 text-success">
        Login Signup
      </a>
      <div className=" d-flex justify-content-center align-items-center mt-5">
        <div className="p-4 shadow rounded" style={{ width: "400px" }}>
          <h3 className="text-center mb-4">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
