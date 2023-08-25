import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const IndieBlog = () => {
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    const {id}= useParams();
    console.log(id)
    //VIEW BLOG
    useEffect(()=>{
        const apiUrl= 'http://localhost:5000/blog/';
       axios.get(apiUrl+id)
       .then((resp)=>{
        console.log(resp.data)
        setData(resp.data)
       })
    },[])
  return (
    <div>
      <h2>{data.title} </h2>
      <p>{data.content} </p>
    </div>
  )
}

export default IndieBlog
