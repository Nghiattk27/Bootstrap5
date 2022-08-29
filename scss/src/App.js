import './App.scss';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import add from './images/add.png';
import {
  Navbar, Nav, NavDropdown, Modal, Alert, Button,
} from 'react-bootstrap';
import CustomCloseButton from './Components/CloseButton/CustomCloseButton';
import CustomModal from './Components/Modal/CustomModal';
import CustomListGroup from './Components/ListGroup/CustomListGroup';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <h2>
        What is Lorem Ipsum
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </h2>
      <CustomModal />
      <CustomListGroup />
    </div>
  )
}

export default App;
