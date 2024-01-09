import { BsBook } from "react-icons/bs"
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1> <Link to='/'> <BsBook/> BOOKSHELF</Link></h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/books'>Livros</Link>
                </li>
                <li>
                    <Link to='/bookregister'>Cadastrar</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre o sitema</Link>
                </li>
                
            </ul>
        </nav>
    )
}


export default Navbar