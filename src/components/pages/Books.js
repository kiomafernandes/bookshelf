import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { BsSearch } from "react-icons/bs"

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import LinkButton from "../layout/LinkButton"
import BookCard from "../book/BookCard"
import Message from "../layout/Message"

import styles from "./Books.module.css"

function Books() {

    const [books, setBooks] = useState([])
    // const [removeLoading, setRemoveLoading] = useState(false)
    const [booksMessage, setBooksMessage] = useState('')
    const [booksType, setBooksType] = useState('')

    const location = useLocation()
    let message = ''
    let type = ''
    if (location.state) {
        message = location.state.message
        type = location.state.type
    }


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/livros', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setBooks(data)
                    // setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 0)
    }, [])

    function removeBook(id) {
        setBooksMessage('')

        fetch(`http://localhost:5000/livros/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setBooks(books.filter((book) => book.id !== id))
                setBooksMessage('Livro removido com sucesso!')
                setBooksType('success')
            })
            .catch((err) => console.log(err))
    }


    return(
       <section className={styles.books_container}>
            {booksMessage && <Message type={booksType} msg={booksMessage} />}
            {message && <Message type={type} msg={message} />}
            <h1>Livros</h1>
            <div className={styles.books_container_form}>
                <form className={styles.books_form}>
                    <Input 
                        type='text'
                        name='search'
                        placeholder='Pesquise o titulo de um livro'
                        
                    />
                    <SubmitButton  text={<BsSearch/>}/>
                </form>
                <LinkButton to='/bookregister' text='Casdastre um livro'/>
            </div>

            <div className={styles.linha}></div>

            <div className={styles.books_content}>
                {books.length > 0 && books.map((book) => (
                    <BookCard 
                        id={book.id}
                        name={book.name}
                        author={book.author}
                        pages={book.pages}
                        company={book.company}
                        edition={book.edition}
                        category={book.category.name}
                        age={book.age.name}
                        key={book.id}
                        handleRemove={removeBook}
                    />
                ))}
                {books.length === 0 && (
                    <p>Não há livro cadastrado no sistema!</p>
                )}
                

                {/* <p>Não há livro cadastrado no sistema!</p>
                <LinkButton to='/bookregister' text='Casdastre um livro'/> */}
            </div>
       </section>
    )
}

export default Books