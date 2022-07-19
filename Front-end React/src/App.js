import { Container, Row, Col,Navbar,Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import LogoutHandling from "./components/LogoutHandling";
import Error from "./pages/Error";
import Particlebackground from "./components/Particlebackground";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Container >
  
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home"element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={  <Login />} />
              <Route path="/signup" element={<Signup /> }/>
               < Route path ="/contact" element ={<ProtectedRoute><Contact /></ProtectedRoute>}/>
                <Route path ="/Services" element = {<ProtectedRoute><Services /></ProtectedRoute>} />
                <Route path ="/logout" element = {<ProtectedRoute><LogoutHandling /></ProtectedRoute>} />
                <Route path ="*" element ={<Error />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
