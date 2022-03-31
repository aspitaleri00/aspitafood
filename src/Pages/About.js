import '../Styles/About.css'
import { Col, Container, Row } from 'react-bootstrap'
import trago from "../Components/Images/trago.jpg"

const About = () => {
    return (
        <div className='about' id='nosotros'>
            <h1 className="title-about" style={{marginTop: '100px'}}>Nosotros</h1>
            <Container>
                <Row>
                    <Col sm={6} className="text-about">
                        <p className='opacity-50 mb-2'>Desde reuniones amistosas a crear una propuesta gastrónomica rápida</p>
                        <p className='mb-2'>Barnie nació en 2009 bajo estas ideas, hoy cuenta con 4 locales en la Argentina y 2 en Uruguay. </p> 
                        <p className='opacity-50 mb-2'>Como misión y primer norma nuestra: superar de manera permanente las expectativas del cliente, con un servicio de calidad y productos de buena categoría.</p>
                        <p>Así tambien, con nuestro equipo, trabajamos con perseverancia, con creatividad y con toda la pasión para ser de las mejores opciones para vos.</p>
                    </Col>
                    <Col sm={6}>
                        <img src={trago} alt="Bar" className="img-about" width={500}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
