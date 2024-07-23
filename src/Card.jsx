import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

const MemeCard=(props)=>{
  const navigate=useNavigate();

    return(
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }} >

            <Card style={{ width: '18rem', margin:"30px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Button onClick={(e)=> navigate(`/edit?url=${props.img}`)}
         variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    )
}

export default MemeCard;