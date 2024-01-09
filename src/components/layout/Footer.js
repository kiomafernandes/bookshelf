import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
        <ul className={styles.socila_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <Link to='/'>BOOKSHELF</Link> &copy; 2023
        </p>
    </footer>
    )
}

export default Footer