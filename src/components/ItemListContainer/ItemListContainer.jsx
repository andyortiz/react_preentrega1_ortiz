import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUsed from "../Card/Card";

const ItemListContainer = () => {
  const { id } = useParams();
  const baseURLProducts = id
    ? `https://dummyjson.com/products/category/${id}`
    : "https://dummyjson.com/products/";
  const [posts, setPosts] = useState([]);

  async function fetchProducts() {
    const data = await axios.get(baseURLProducts);
    setPosts(data.data.products)

    // console.log("URL Link (List): ",baseURLProducts)
    // console.log("data.products (List): ", data.data.products)
    // console.log("Posts (List): ",posts) 
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  if (posts.length > 0) {
    return (    
      <div display='flex'>
        <Container>
            {posts.map( item => (
            <CardUsed key={item.id} item={item}/>
          ))}
        </Container>
      </div>
    )  
  }
  
};

export default ItemListContainer;
