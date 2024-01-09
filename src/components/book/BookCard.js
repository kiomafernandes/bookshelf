import { BsPencil, BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import styles from "./BookCard.module.css"

function BookCard({id, name, author, pages, company, edition, category, age, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.card}>
            <h3>{name}</h3>
            {/* <p><span>{author}</span> {pages} paginas - {age}</p> */}
            <p>
                <span>Autor:</span> {author}
            </p>
            <p>
                <span>Nº de paginas:</span> {pages} paginas
            </p>
            <p>
                <span>Editora:</span> {company}
            </p>
            <p>
                <span>Nº da edição:</span> {edition}ª edição
            </p>
            <p>
                <span>Categoria:</span> {category}
            </p>
            <p>
                <span>Classificação recomendada:</span> {age}
            </p>
            <div className={styles.card_button}>
                <Link to={`/book/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default BookCard