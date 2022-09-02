import './App.scss';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import add from './images/add.png';
import {
  Navbar, Nav, NavDropdown, Modal, Alert, Button,
} from 'react-bootstrap';
import CustomCloseButton from './Components/CloseButton/CustomCloseButton';
import CustomModal from './Components/Modal/CustomModal';
import CustomListGroup from './Components/ListGroup/CustomListGroup';
import CustomSlider from './Components/Slider/CustomSlider';
import wow1 from './images/wow1.jpg';
import wow2 from './images/wow2.jpg';
import wow3 from './images/wow3.jpg';
import Responsive from './Components/Responsive/Responsive';
import SaleOffCard from './Components/SaleOffCard/SaleOffCard';
import ImageQuestion from './Components/ImageQuestion/ImageQuestion';
import VideoLecture from './Components/VideoLecture/VideoLecture';
import Template from './Components/Template/Template';
import VideoCustom from './Components/VideoCustom/VideoCustom';

function App() {

  // const [slider, setSlider] = useState([]);

  // useEffect(() => {
  //   setSlider([...slider, wow3, wow1, wow2, wow3, wow1]);
  // }, [])

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="App">
      {/* <h2>
        What is Lorem Ipsum
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </h2>
      <CustomModal />
      <CustomListGroup /> */}
      {/* <div className='sliderBx'>
        <CustomSlider slider={slider} />
      </div> */}
      {/* <Responsive /> */}
      {/* <SaleOffCard /> */}
      {/* <div className='imageQuestionBx'>
        <ImageQuestion />
      </div> */}
      {/* <Template /> */}
      <div className='VideoLectureBx'>
        <VideoCustom />
      </div>
    </div>
  )
}

export default App;
