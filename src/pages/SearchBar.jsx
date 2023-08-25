import axios from "axios";
import { useState } from "react";
import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {
  const [input,setInput]=useState('');

  const fetchData=(value)=>{
    fetch('http://localhost:5000/blogs')
    .then((resp)=>resp.json())
    .then((jay)=>{
      const results= jay.filter((article)=>{
        return(
          value && article && article.title && article.title.toLowerCase().includes(value)
        );
      });
      setResults(results)
    })
  }

  const handleChange=(value)=>{
    setInput(value);
    fetchData(value)
  }
  return(
    <div>
    <FaSearch></FaSearch>
    <input type="text" placeholder="Type to search" value={input} onChange={(e)=>handleChange(e.target.value)} />
  </div>
  )
}
export default SearchBar
