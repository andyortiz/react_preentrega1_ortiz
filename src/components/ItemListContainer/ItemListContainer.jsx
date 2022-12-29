import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUsed from "../Card/Card";

const ItemListContainer = () => {
  const { id } = useParams();
  const baseURLProducts = id
    ? `https://dummyjson.com/products/category/${id}`
    : "https://dummyjson.com/products/";
  const [posts, setPosts] = useState(null);

  async function fetchProducts() {
    const data = await axios.get(baseURLProducts);
    return data.data.products;
  }

  useEffect(() => {
    let ignore = false;

    // Docu de react: https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
    async function startFetching() {
      const json = await fetchProducts();
      if (!ignore) {
        setPosts(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    console.log("Products: ", posts);
  }, [posts]);

  return <CardUsed />;
};

export default ItemListContainer;
