import '../styles/Header.css'
import FotoPerfil from '../assets/images/foto-perfil.jpg'

function Header() {
    return ( 
        <header>
            <img src={FotoPerfil} alt="Imágen mía" />
            <h1 className='gradient-text'>José Luis Elizondo</h1>
            <div className="separator"></div>
            <h2>Desarrollador Frontend</h2>
        </header>
     );
}

export default Header;