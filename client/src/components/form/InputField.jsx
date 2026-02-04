import Form from "react-bootstrap/Form";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default InputField;
