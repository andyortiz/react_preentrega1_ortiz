import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Card = () => {

  const { id } = useParams()
  console.log(id)
  const baseURL = `https://dummyjson.com/products/${ id || "1" }`;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post)
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}
export default Card