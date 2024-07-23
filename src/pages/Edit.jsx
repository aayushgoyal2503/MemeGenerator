import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../Text";
import {exportComponentAsJPEG} from "react-component-export-image"

const Edit=()=>{

    const [params]=useSearchParams();
    const [count,setCount]=useState(0);
    const memeRef=createRef();


    const addText=()=>{
     setCount(count+1);
    }

    return(
        <div>
        <h1>Edit Page</h1>
        <div ref={memeRef}>
           <img src={params.get("url")} width="300px" />
         {
            Array(count)
            .fill(0)
            .map((e)=>(
                <Text/>
            ))
         }
        </div>
        <Button onClick={addText}>Add Text</Button>
        <Button variant="success"onClick={(e) =>exportComponentAsJPEG(memeRef)}>
            Save
        </Button>
        </div>
    )
}

export default Edit;
