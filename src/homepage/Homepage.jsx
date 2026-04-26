import { Link, useLoaderData } from "react-router-dom";
import styles from "./Homepage.module.css";
import { constructionImage } from "../assets";
import { format } from "date-fns";
import { useState } from "react";

const Post = ({ post }) => {
  const formattedDate = format(post.created, "MMM d, y");

  return (
    <article className={styles.postArticle}>
      <Link to={`/posts/${post.id}`} className={styles.articleLink}></Link>
      <img src={post.image} className={styles.postImage} alt="Article image" />
      <Link to={`/posts?userId=${post.author.id}`} className={styles.postLink}>
        <p className={styles.postInfo}>
          {post.author.name} • {formattedDate}
        </p>
      </Link>
      <Link to={`posts/${post.id}`} className={styles.postLink}>
        <h1 className={styles.postHeading}>{post.title}</h1>
      </Link>
      <p>{post.description}</p>
      <div className={styles.categoriesContainer}>
        {post.categories.map((category) => (
          <Link
            to={`/posts?category=${category.name}`}
            className={styles.categoryLink}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </article>
  );
};

const Homepage = () => {
  const [page, setPage] = useState(1);
  const { result } = useLoaderData();

  const posts = result.data;
  const maxPages = Math.floor(posts.length / 8) + 1;
  let pagePosts;
  if (posts.length > 8) {
    pagePosts = posts.slice((page - 1) * 8, (page - 1) * 8 + 8);
  } else {
    pagePosts = posts;
  }

  function handlePageButtonClick(event) {
    const buttonType = event.currentTarget.dataset.type;

    if (buttonType === "previous") {
      if (page <= 1) return;

      setPage(page - 1);
    } else {
      if (page >= maxPages) return;

      setPage(page + 1);
    }
  }

  // check if there was an error fetching data
  if (result.status === "error" || !posts) {
    return (
      <div className="errorContainer">
        <p className="errorPara">
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
      <div className={styles.featuredContainer}>
        <h1 className={styles.homepageHeading}>Today's Featured Article</h1>
        <Post post={featuredPost} />
      </div>
      <h2 className={styles.allHeading}>All Articles</h2>
      <ul className={styles.articlesUl}>
        {pagePosts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <div className={styles.pageContainer}>
        <button
          className={page <= 1 ? styles.disabled : ""}
          aria-label="Previous page"
          data-type="previous"
          onClick={handlePageButtonClick}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <p>Page {page}</p>
        <button
          className={page >= maxPages ? styles.disabled : ""}
          aria-label="Next page"
          data-type="next"
          onClick={handlePageButtonClick}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export { Homepage };
