import { useLoaderData, Link } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import styles from "./Post.module.css";
import { format } from "date-fns";

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

  const { title, image, content, created, description, categories, author } =
    postData;
  const formattedDate = format(created, "MMM d, y");
  const authorName = author.name;

  return (
    <div className={styles.postContainer}>
      <header>
        <p className={styles.date}>{formattedDate}</p>
      </header>
      <h1 className={styles.title}>{title || "[Your Title Here]"}</h1>
      <img
        src={
          image ||
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?_=20210521171500"
        }
        alt="Article image"
        className={styles.image}
      />
      <p className={styles.author}>Posted by {authorName}. No comments yet.</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.categoriesContainer}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryLink}>
            {category.name}
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {content ? (
          parse(DOMPurify.sanitize(content))
        ) : (
          <p>Write your thoughts here!</p>
        )}
      </div>
      <div>
        {/* Add comment functionality later! */}
        <h2 className={styles.commentsHeading}>Comments</h2>
        <p>No comments yet. Start the discussion!</p>
      </div>
    </div>
  );
};

export { Post };
