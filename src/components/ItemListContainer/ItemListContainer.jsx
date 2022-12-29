import { useState, useEffect } from 'react'
//import CardUsed from '../Card/Card';
import axios from "axios"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const { id } = useParams()
  console.log(id)
  //const baseURLProducts = "https://dummyjson.com/products/";
  const baseURLProducts = `https://dummyjson.com/products/category/${id}`;
  const [post, setPost] = useState(null);
  
     useEffect( () => {
       axios.get(baseURLProducts).then((response) => {
        console.log(response.data.products.map(({id}) => (
          console.log(id)
        )))
         setPost(response.data);
         console.log(post)
       });
     }, []); 
  
   if (!post) return null;
  
  return (
    <>
      {/* {post.map(({id}) => (
          <CardUsed key={id} id={id}/>
      ))} */}
    </>
  )
  };

export default ItemListContainer