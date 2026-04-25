import { useLoaderData } from "react-router-dom";
import styles from "./Post.module.css";

const Post = () => {
  const { result } = useLoaderData();
  const postData = result.data;
  return <p>Posts!</p>;
};

export { Post };
