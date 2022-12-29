import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardUsed = () => {


  // HINT: ¿De verdad necesitas esto?
  
  // const { id } = useParams()
  // console.log("id Card:"+id)
  // const baseURL = `https://dummyjson.com/products/${ id || "1" }`;
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //     console.log(post)
  //   });
  // }, []);

  // if (!post) return null;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default CardUsed