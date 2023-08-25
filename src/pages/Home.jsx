import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './home.css'
import axios from 'axios'
import SearchBar from './SearchBar'
import SearchResultsList from '../components/SearchResultsList'
const Home = () => {
  const {id}= useParams();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [results,setResults]=useState([])

    const navigate=useNavigate();

    //FETCH BLOGS
    useEffect(()=>{
      const apiUrl= 'http://localhost:5000/blogs';
      const fetchData=()=>{
       axios.get(apiUrl)
        .then((resp)=>{
          setData(resp.data);
          console.log(resp.data)
          setLoading(false)
        })
        .catch((err)=>{
          setError(err);
          setLoading(false)
        })
      };
      fetchData();
    },[])
/*
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []); **/

 

  const [items, setItems] = useState([]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className='home-container'>
      <div className='headers'>
      <h2>Welcome to my blog</h2>
      <div>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
       
                {items.map(item => (
                    <p key={item._id}>{item.title}</p>  // adjust based on your data structure
                ))}
           
      </div>
      </div>
      <div className='topics'>
          {data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((item)=>{
            return(
              <div className='home-item' key={item._id}>
              <Link>
        <h3>{item.title} </h3>
        <p>{item.content.substring(0,400)} </p>
        <button>Read more...</button>
        </Link>
        <p>Posted: {new Date(item.createdAt).toDateString()} {new Date(item.createdAt).toLocaleTimeString()}</p>
        </div>
            )
          })}
        
      </div>
    </div>
  )
}

export default Home
