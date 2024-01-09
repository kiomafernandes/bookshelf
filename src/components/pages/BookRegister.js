import { useNavigate } from 'react-router-dom'
import { useState } from "react"

import BookForm from "../book/BookForm"
import styles from "./BookRegister.module.css"

function BookRegister() {
    const navigate = useNavigate()
    const [message, setMessage] = useState([])
    const [type, setType] = useState([])

    function createPost(book) {
        setMessage('')

        fetch("http://localhost:5000/livros", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(book),
        })
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data)
                navigate('/books', { message: 'Livro cadastrado com sucesso!' })
                setMessage('Livro cadastrado com sucesso!')
                setType('success')

            })
            .catch((err) => console.log(err))

    }


    return (
        <div className={styles.register_container}>
            <h1>Cadastre um livro</h1>
            <div className={styles.linha}></div>
            <BookForm handleSubmit={createPost} btnText="Cadastrar livro" />
            
        </div>
    )
}

export default BookRegister