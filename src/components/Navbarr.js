import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";


export default function NavFct() {
const dispatch = useDispatch()
const handleLogout = ()=> {
  dispatch(logoutUser)
}
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="Navbar-container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png"
              width="45"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            {isAuth ? (
              <div>
                <Link to="/dashboard">
                  <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                </Link>
                <Button onClick={handleLogout} >Logout</Button>
                </div>
            ) : (
              <div className="auth-buttons">
                <Login className="login" />
                <Register className="register" />
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
