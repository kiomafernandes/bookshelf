import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import BookForm from "../book/BookForm"
import styles from "./BookRegister.module.css"
import Message from "../layout/Message"


function Book() {

    const {id} = useParams()
    const [book, setBook] = useState([])
    const [message, setMessage] = useState([])
    const [type, setType] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/livros/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setBook(data)
                    // setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 0)
    }, [id])

    function editPost(book) {
        setMessage('')


        fetch(`http://localhost:5000/livros/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book),
        }) 
            .then((resp) => resp.json())
            .then((data) => {
                setBook(data)
                // setShowPorjectForm(false)
                setMessage('Livro atualizado com sucesso!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    return(
        <>
            {book.name && (
                <div className={styles.register_container}>
                    {message && <Message type={type} msg={message} />}
                <h1>Editar {book.name}</h1>
                
                <BookForm 
                    handleSubmit={editPost} 
                    bookData={book} 
                    btnText="Editar livro" 
                />
                
                </div>
            )}
       </>
    )
}

export default Book