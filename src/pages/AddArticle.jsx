import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './addArticle.css';
const AddArticle = () => {
    const [article,setArticle]=useState({
        title: '',
        content: ''
    });

    //CREATE A VARIABLE AND INITIALIZE USENAVIGATE FOR REDIRECT AND RELOAD
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setArticle(previousState =>({
            ...previousState,
            [name]: value
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/new-blog',article)
        .then((result)=>{
            console.log(result)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='add-blog-container'>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name='title' value={article.title} onChange={handleChange} placeholder='Title' /> <br />
        <textarea cols="70" rows="20" name='content' value={article.content} onChange={handleChange} placeholder='Content'></textarea> <br />
        <button>Add Article</button>
      </form>
    </div>
  )
}

export default AddArticle
