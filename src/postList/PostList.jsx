import { useLoaderData, Link } from "react-router-dom";
import styles from "./PostList.module.css";
import { useState } from "react";
import { format } from "date-fns";

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

const PostList = () => {
  const [page, setPage] = useState(1);
  const { result, title } = useLoaderData();
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

  if (result.status === "error") {
    return (
      <div className="errorContainer">
        <p className="errorPara">{result.errors[0].message}</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }

  return (
    <div className={styles.postListContainer}>
      <h2 className={styles.postListHeading}>{title}</h2>
      <div className={styles.postsContainer}>
        {posts.length > 0 ? (
          <ul className={styles.articlesUl}>
            {pagePosts.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.emptyPara}>No posts yet.</p>
        )}
      </div>
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

export { PostList };
