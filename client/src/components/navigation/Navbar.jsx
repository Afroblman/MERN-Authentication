import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navigationbar = () => {
  const { url } = useContext(AuthContext);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${url}/api/auth/logout`,
        {},
        { withCredentials: true },
      );
      if (response.data.success) {
        toast.success("Logout Successfully");
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={isDashboard ? "/dashboard" : "/"}>
          Workspace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isDashboard ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="#projects">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="#team">
                  Team
                </Nav.Link>
                <Button
                  onClick={handleLogout}
                  variant="outline-light"
                  className="ms-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Log in
                </Nav.Link>
                <Button
                  as={Link}
                  to="/signup"
                  className="ms-2"
                  variant="success"
                >
                  Sign up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
