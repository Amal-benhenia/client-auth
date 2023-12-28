import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const loginHandler = (e)=> {
    e.preventDefault()
    const data = {password, email }
    dispatch(loginUser(data))
    handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setEmail(e.target.value) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter your password"
              autoFocus
              onChange={(e)=>setPassword(e.target.value) }
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default Login;