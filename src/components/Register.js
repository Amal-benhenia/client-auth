import { useState } from 'react';
import { useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { registerUser } from '../redux/authSlice';


function Register() {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch= useDispatch()
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const registerHandler = (e)=> {
    e.preventDefault()
    const newUser = {userName,email, password}
    dispatch(registerUser(newUser))
    handleClose()
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please type your username"
            autoFocus
            onChange={(e)=>setUserName(e.target.value)}   
            />
        </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter your password"
              autoFocus
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={registerHandler}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default Register;