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
  const featuredPost = posts.pop();

  return (
    <>
      <article className={styles.featuredContainer}>
        <img src={featuredPost.image} alt="Article image" />
        <h3>Featured Article</h3>
        <p>
          {featuredPost.author.name} • {featuredPost.created}
        </p>
        <h1>{featuredPost.title}</h1>
        <p>{featuredPost.description}</p>
        <div className={styles.categories}>{/* to be added soon! */}</div>
      </article>
      <ul className={styles.allArticles}></ul>
    </>
  );
};

export { Homepage };
