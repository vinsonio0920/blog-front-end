import { useLoaderData, Link } from "react-router-dom";
import styles from "./Post.module.css";

const Post = () => {
  const { result } = useLoaderData();
  const postData = result.data;

  if (result.status === "error") {
    return (
      <div className="errorContainer">
        <p className="errorPara">
          There was an error fetching the post. Please try again later.
        </p>
        <Link to="/">Return to the homepage</Link>
      </div>
    );
  }
  return <p>Posts!</p>;
};

export { Post };
