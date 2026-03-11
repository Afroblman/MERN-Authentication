import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Navigationbar from "../navigation/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { url } = useContext(AuthContext);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`${url}/api/user/data`, {
          withCredentials: true,
        });
        const data = response.data;
        setName(data.userData.name);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      <Navigationbar />

      <Container className="text-center mt-5">
        <h2>
          Welcome{name ? ", " : ""} {name}
        </h2>
        <p className="lead">
          A simple, powerful platform to manage your projects, collaborate with
          your team, and achieve results faster.
        </p>
      </Container>

      <Container className="mt-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Projects</Card.Title>
                <Card.Text>
                  View and manage all your projects in one place.
                </Card.Text>
                <Button variant="success">Go to Projects</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Tasks</Card.Title>
                <Card.Text>
                  Keep track of tasks and deadlines for your team.
                </Card.Text>
                <Button variant="success">View Tasks</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  Collaborate and communicate with your team efficiently.
                </Card.Text>
                <Button variant="success">Team Dashboard</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
