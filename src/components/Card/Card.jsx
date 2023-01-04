import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardUsed = (props) => {

  const { item } = props
  console.log(item)
  
  return (
    <Card style={{ width: '18rem' }} flex>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Precio: ${item.price}</Card.Text>

        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  );
}
export default CardUsed