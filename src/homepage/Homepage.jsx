import { useLoaderData } from "react-router";
import styles from "./Homepage.module.css";
import { constructionImage } from "../assets";

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
    <>
      <h1>Today's Featured Article</h1>
      <article className={styles.featuredContainer}>
        <img src={featuredPost.image} alt="Article image" />
        <p>
          {featuredPost.author.name} • {featuredPost.created}
        </p>
        <h1>{featuredPost.title}</h1>
        <p>{featuredPost.description}</p>
        <div className={styles.categories}>
          {featuredPost.categories.map((category) => (
            <p key={category.id}>{category.name}</p>
          ))}
        </div>
      </article>
      <h2>All Articles</h2>
      <ul className={styles.allArticles}>
        {posts.map((post) => (
          <li key={post.id}>
            <article>
              <img src={post.image} alt="Article image" />
              <p>
                {post.author.name} • {post.created}
              </p>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div className={styles.categories}>
                {post.categories.map((category) => (
                  <p key={category.id}>{category.name}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
      <p>Page 1</p>
    </>
  );
};

export { Homepage };
