import '../style/styleNabvar.scss'
import { Navbar } from "react-bootstrap";
import logo from '../../images/logoNYT.png'

const NabvarContainer = () => {
  return (
    <Navbar fixed="top" style={{ backgroundColor: "#ffc107" }} variant="light">
    <Navbar.Brand href="/home">
      <img className="imgLogo" src={logo} alt=""/>
    </Navbar.Brand>
  </Navbar>

    )
};
export default NabvarContainer;


