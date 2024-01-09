import LinkButton from "../layout/LinkButton"
import Input from "../form/Input"
import { useState, useEffect } from "react"

import styles from "./About.module.css"
import SubmitButton from "../form/SubmitButton"
import Message from "../layout/Message"

function About() {

    const [showCategoryForm, setShowCategoryForm] = useState(false)
    const [categories, setCategories] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/categories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setCategories(data)
                    // setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 0)
    }, [])


    function createCategories(categories) {
        setMessage('')

        fetch("http://localhost:5000/categories", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(categories),
        })
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data)
                setMessage('Categoria cadastrada com sucesso!')
                setType('success')

            })
            .catch((err) => console.log(err))
    }

    const submit = (e) => {
        e.preventDefault()
        // console.log(book)
        createCategories(categories)
        setShowCategoryForm(!showCategoryForm)
    }

    function handleChange(e) {
        setCategories({...categories, [e.target.name]: e.target.value})
        
    }

    function toggleProjectForm() {
        setShowCategoryForm(!showCategoryForm)
    }


    return (
        <section className={styles.about_container}>
            {message && <Message type={type} msg={message} />}
            <h1>Sobre o sistema</h1>
            
            <p>O sistema foi desenvolvido para catalogar livros, permitindo manter controle sobre os titulos pertencentes ao catálogo. O software permite cadastrar e pesquisar livros.</p>
            
            <p>O sistema foi desenvolvido por <span>Kioma Fernandes</span></p>

            <h2>Categorias</h2>
            <button className={styles.btn} onClick={toggleProjectForm}>
                {!showCategoryForm ? 'Nova categoria' : 'Todas as categorias'}
            </button>
                    {!showCategoryForm ? (
                        <div className={styles.categories_info}>
                            {categories.length > 0 && categories.map((category) => (
                                    <p><span>Categoria:</span> {category.name}</p>
                            ))}
                        </div>
                        
                    ) : (
                        <form onSubmit={submit} className={styles.category_create}>
                            <Input
                                name='name'
                                type='text'
                                text='Inserir nova categoria'
                                placeholder='Digite o nome da nova categoria'
                                handleOnChange={handleChange}
                                value={categories.name ? categories.name.id : ''}
                             />
                             <SubmitButton text='Criar nova categoria'/> 
                        </form>
                    )}   
        </section>
        
    )
}


export default About