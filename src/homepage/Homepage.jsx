import { Link, useLoaderData } from "react-router";
import styles from "./Homepage.module.css";
import { constructionImage } from "../assets";
import { format } from "date-fns";

const Post = ({ post }) => {
  const formattedDate = format(post.created, "MMM d, y");

  return (
    <article className={styles.postArticle}>
      <Link to={`/posts/${post.id}`} className={styles.postLink}>
        <img
          src={post.image}
          className={styles.postImage}
          alt="Article image"
        />
      </Link>
      <p className={styles.postInfo}>
        <Link to={`/users/${post.author.id}`} className={styles.postLink}>
          {post.author.name} • {formattedDate}
        </Link>
      </p>
      <h1 className={styles.postHeading}>
        <Link to={`/posts/${post.id}`} className={styles.postLink}>
          {post.title}
        </Link>
      </h1>
      <div className={styles.categoriesContainer}>
        {post.categories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            className={styles.categoryLink}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <p>{post.description}</p>
    </article>
  );
};

const Homepage = () => {
  const { result } = useLoaderData();
  const posts = result.data;
  console.log(posts);

  // check if there was an error fetching data
  if (result.status === "error" || !posts) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorPara}>
          We encountered an error retrieving the data. Please refresh and try
          again!
        </p>
      </div>
    );
  } else if (posts.length === 0) {
    return (
      <div className={styles.constructionContainer}>
        <img
          src={constructionImage}
          className={styles.constructionImage}
          width="300"
          alt="A image of a website being constructed"
        />
        <h1 className={styles.constructionHeader}>
          Website Under Construction
        </h1>
        <p>
          Sorry, but no articles yet! Check back soon, and you can begin reading
          peak nonfiction. But alas, goodbye for now!
        </p>
      </div>
    );
  }

  // temporary featured post functionality
  const featuredPost = posts[posts.length - 1];

  return (
    <div className={styles.homepageContainer}>
      <h1 className={styles.homepageHeading}>Today's Featured Article</h1>
      <Post post={featuredPost} />
      <h2 className={styles.allHeading}>All Articles</h2>
      <ul className={styles.allArticles}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <p>Page 1</p>
    </div>
  );
};

export { Homepage };
