import { useLoaderData, Link, useFetcher } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import styles from "./Post.module.css";
import { format } from "date-fns";

const ErrorElement = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

const Post = () => {
  const fetcher = useFetcher();
  const { result } = useLoaderData();
  const postData = result.data;

  // create state for comments and update if successful
  const formErrors = {};
  console.log(fetcher.data);
  fetcher.data?.errors.map((error) => {
    formErrors[error.path] = error.msg;
  });

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

  const {
    id,
    title,
    image,
    content,
    created,
    description,
    categories,
    author,
  } = postData;
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
        <fetcher.Form method="POST" className={styles.commentForm}>
          <h3>Leave a Comment</h3>
          <p>
            Your email address will not be published. Required fields are marked
            with an asterisk (*)
          </p>
          <section className={styles.fieldsContainer}>
            <div>
              <div>
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength="34"
                  className={formErrors["name"] && styles.invalid}
                />
                {formErrors["name"] && (
                  <ErrorElement message={formErrors["name"]} />
                )}
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  maxLength="254"
                  className={formErrors["email"] && styles.invalid}
                />
                {formErrors["email"] && (
                  <ErrorElement message={formErrors["email"]} />
                )}
              </div>
            </div>
            <div className={styles.commentField}>
              <label htmlFor="comment">Comment*</label>
              <textarea
                id="comment"
                name="comment"
                required
                maxLength="254"
                className={formErrors["comment"] && styles.invalid}
              />
              {formErrors["comment"] && (
                <ErrorElement message={formErrors["comment"]} />
              )}
            </div>
          </section>
          <section>
            <div>
              <input type="hidden" id="postId" name="postId" value={id} />
            </div>
          </section>
          <section>
            <div>
              <button type="submit">Submit Comment</button>
            </div>
          </section>
        </fetcher.Form>
        <h2 className={styles.commentsHeading}>Comments</h2>
        <p>No comments yet. Start the discussion!</p>
      </div>
    </div>
  );
};

export { Post };
