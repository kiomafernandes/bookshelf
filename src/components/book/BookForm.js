import {useEffect, useState} from 'react'

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import Select from "../form/Select"
import styles from "./BookForm.module.css"

function BookForm({handleSubmit, btnText, bookData}) {
    const [categories, setCategories] = useState([])
    const [age, setAge] = useState([])
    const [book, setBook] = useState(bookData || [])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/age", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setAge(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        // console.log(book)
        handleSubmit(book)
    }

    function handleChange(e) {
        setBook({...book, [e.target.name]: e.target.value})
        
    }


    function handleCategory(e) {
        setBook({...book, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
        
    }

    function handleAge(e) {
        setBook({...book, 
            age: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
        
    }



    return(
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type='text'
                    name='name'
                    text='Título'
                    placeholder='Insira o titulo do livro'
                    handleOnChange={handleChange}
                    value={book.name ? book.name : ''}
                />

                <Input
                    type='text'
                    name='author'
                    text='Autor/Escritor'
                    placeholder='Insira o nome do autor'
                    handleOnChange={handleChange}
                    value={book.author ? book.author : ''}
                />

                <Input
                    type='number'
                    name='pages'
                    text='Numero de paginas'
                    placeholder='Insira o numero de paginas'
                    handleOnChange={handleChange}
                    value={book.pages ? book.pages : ''}
                />

                <Input
                    type='text'
                    name='company'
                    text='Editora'
                    placeholder='Insira o nome da editora'
                    handleOnChange={handleChange}
                    value={book.company ? book.company : ''}
                />

                <Input
                    type='number'
                    name='edition'
                    text='Numero da edição'
                    placeholder='Insira o numero da edição'
                    handleOnChange={handleChange}
                    value={book.edition ? book.edition : ''}
                />

                <Select 
                    name="category_id" 
                    text="Selecione a categoria" 
                    options={categories}
                    handleOnChange={handleCategory}
                    value={book.category ? book.category.id : ''}
                />

                <Select 
                    name="age_id" 
                    text="Selecione a classificação" 
                    options={age}
                    handleOnChange={handleAge}
                    value={book.age ? book.age.id : ''}
                />

                <SubmitButton text={btnText}/>
            </form>
        
    )
}

export default BookForm