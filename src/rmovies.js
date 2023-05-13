import { useEffect, useState } from "react";
import "./rmovies.css";
import { Result } from "./Result";
import axios from "axios";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Royalmovies (){
  const [movies,setmovies]=useState([]);
  const [search,setsearch]=useState("");

  const changeSearch=(event)=>{
    setsearch(event.target.value);
  }

  const showAllMovies=()=>{
    axios.get(APIURL)
    .then((response)=>{
      setmovies(response.data.results);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const searchMovies=()=>{
    axios.get(
      SEARCHAPI + search
    )
    .then((response)=>{
      setmovies(response.data.results);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    if(search===""){
      showAllMovies();
    }else{
      searchMovies();
    }
    
  },[search])

  return(
    <>
    <div className="bg">
      <input value={search} onChange={changeSearch} type="text" placeholder="Search Movies"/>
      {
        movies.length===0 ? <div>Loading...</div> : <Result movies={movies}/>
      }
    </div>
    </>
  )
}

export {Royalmovies}; 