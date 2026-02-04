import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center d-flex flex-grow-1 align-items-center justify-content-center">
      <div className="container">
        <h2 className="fw-bold custom-heading">Welcome to Your Workspace</h2>
        <p className="lead mt-3">
          A simple, powerful platform to manage your projects, collaborate with
          your team, and achieve results faster.
        </p>
        <Button
          as={Link}
          to="signup"
          variant="success"
          size="lg"
          className="mt-3"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
