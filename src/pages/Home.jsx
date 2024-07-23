import React, { useEffect, useState } from "react";
import MemeCard from "../Card";
import { getAllMemes } from "../memes";

const Homepage=()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
    getAllMemes().then((memes)=> setData(memes.data.memes));
    },[]);


    return(
        <div className="row">
     {
     data.map((el)=>(
        <MemeCard img={el.url} title={el.name}/>
       ))}
        </div>
    )
}
export default Homepage;