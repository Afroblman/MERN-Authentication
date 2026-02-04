import Button from "react-bootstrap/Button";

const SubmitButton = ({ text }) => {
  return (
    <Button variant="success" type="submit" className="w-100">
      {text}
    </Button>
  );
};

export default SubmitButton;
