import '../Styles/Contact.css'
import Logo from '../Components/Images/Logo.jpeg'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
    return (
        <Container fluid className="contact" id='contacto'>
            <Row className='contact-container'>
                <Col sm={6} className='text-center'>
                    <img src={Logo} alt="logo"/>
                </Col>
                <Col sm={6}>
                    <h5 className='redes pt-2' ><AiOutlineWhatsApp/> WhatsApp: +54 2615955438</h5>
                    <h6 className='contact-title'>Correo : info@bernie.com.ar</h6>
                    <h6 className='redes pt-2' >Redes</h6><AiOutlineInstagram fontSize="30px"/> 
                   
                </Col>
            </Row>
            <p className='copyright'>Agustin Spitaleri ©2022 copyright</p>
        </Container>
    )
}

export default Contact