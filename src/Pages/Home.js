import '../Styles/Home.css'
import { HashLink } from 'react-router-hash-link' 

import About from '../Pages/About'
import Menu from '../Pages/Menu'
import Comment from '../Pages/Coment'
import Contact from '../Pages/Contact'

const Home = () => {
    return (
        <>
            <div className="main-container" id='inicio'>
                <div className="container-fluid gx-0">
                    <div className="background-container d-flex align-items-center justify-content-center flex-column">
                        <p className='text-center'>DESCUBRÍ TU ESTILO</p>
                        <HashLink className="button-home" to="/#nosotros">¡DESCUBRÍ RINCON!</HashLink>
                    </div>
                </div>
            </div>
            <About/>
            <Menu/>
            <Comment/>
            <Contact />
        </>
    )
}

export default Home