import { BsBook } from "react-icons/bs"
import styles from "./Home.module.css"
import LinkButton from "../layout/LinkButton"

function Home(){
    return (
        <section className={styles.home_container}>
            <div className={styles.home_img}>
                <h1> <BsBook/> </h1>
            </div>
            <div className={styles.home_text}>
                <h1>Bem-vindo ao  BOOKSHELF</h1>
                <p>Seu organizador virtual de livros</p>
            </div> 
            <div className={styles.home_btn}>
                <h1>Incie a sua experiência</h1>
                <LinkButton to='/bookregister' text='Casdastre um livro'/>
            </div>
        </section>
    )
}

export default Home