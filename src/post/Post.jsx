import { useLoaderData, Link } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import styles from "./Post.module.css";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

const ErrorElement = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

const Comments = ({ comments }) => {
  if (comments.status === "error" && comments.method === "get") {
    return (
      <p className={styles.commentsErrorPara}>
        There was an error fetching the comments. Please try again later.
      </p>
    );
  } else if (comments.length < 1) {
    return <p>No comments yet. Start the discussion!</p>;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className={styles.commentLi}>
          <header>
            <p className={styles.commentName}>{comment.name}</p>
            <p className={styles.commentDate}>
              {format(comment.created, "MMMM d y, ")} at{" "}
              {format(comment.created, "h:mm a")}
            </p>
          </header>
          <p className={styles.commentContent}>{comment.content}</p>
        </li>
      ))}
    </ul>
  );
};

const Post = () => {
  const commentRef = useRef();
  const { result } = useLoaderData();
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  const [cursor, setCursor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const postData = result.data;

  useEffect(() => {
    const fetchComments = async () => {
      const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts/${postData.id}/comments`;

      try {
        const response = await fetch(url);

        const result = await response.json();
        if (result.status === "success") {
          if (result.data.comments.length <= 0) return;

          const lastPost =
            result.data.comments[result.data.comments.length - 1];
          setCursor(lastPost.id);

          setCommentsCount(result.data.commentsCount);
          return setComments(result.data.comments);
        } else {
          return setComments({
            status: "error",
            method: "get",
          });
        }
      } catch (err) {
        console.error(err.message);
        return setComments({
          status: "error",
          method: "get",
        });
      }
    };

    fetchComments();
  }, [postData]);

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

  const handleSubmitClick = async (event) => {
    event.preventDefault();
    const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts/${postData.id}/comments`;

    try {
      const formattedComment = {
        name: formData.name,
        email: formData.email,
        content: formData.comment,
      };

      const response = await fetch(url, {
        method: "POST",
        body: new URLSearchParams(formattedComment),
      });

      const result = await response.json();
      if (result.status === "success") {
        setFormData({
          name: "",
          email: "",
          comment: "",
        });
        setFormErrors([]);

        const newComments = [...comments, result.data];
        setComments(newComments);

        // move user to the comments section
        commentRef.current.scrollIntoView();
      } else {
        return setFormErrors(result.errors);
      }
    } catch (err) {
      console.error(err.message);
      return setComments({
        status: "error",
        method: "post",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCommentLoadClick = async () => {
    const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts/${postData.id}/comments?cursor=${cursor}`;

    if (comments.length >= commentsCount) return;

    try {
      const response = await fetch(url);

      const result = await response.json();
      if (result.status === "success") {
        const lastPost = result.data.comments[result.data.comments.length - 1];
        setCursor(lastPost.id);

        setCommentsCount(result.data.commentsCount);

        const newComments = comments.concat(result.data.comments);
        return setComments(newComments);
      } else {
        return setCursor({
          status: "error",
          method: "load",
        });
      }
    } catch (err) {
      console.error(err.message);
      return setCursor({
        status: "error",
        method: "load",
      });
    }
  };

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
      <p className={styles.author}>
        Posted by {authorName}.{" "}
        {comments.length < 1 ? "No comments yet." : `${commentsCount} comments`}
      </p>
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
      <form method="POST" className={styles.commentForm}>
        <h3 ref={commentRef}>Leave a Comment</h3>
        <p>
          Your email address will not be published. Required fields are marked
          with an asterisk (*)
        </p>
        <p>
          {comments.status === "error" && comments.method === "post" && (
            <p className={styles.formErrorPara}>
              There was an error submitting your comment. Please try again
              later.
            </p>
          )}
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
                className={
                  formErrors.find((error) => error.path === "name") &&
                  styles.invalid
                }
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.find((error) => error.path === "name") && (
                <ErrorElement
                  message={
                    formErrors.find((error) => error.path === "name").msg
                  }
                />
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
                className={
                  formErrors.find((error) => error.path === "email") &&
                  styles.invalid
                }
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.find((error) => error.path === "email") && (
                <ErrorElement
                  message={
                    formErrors.find((error) => error.path === "email").msg
                  }
                />
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
              className={
                formErrors.find((error) => error.path === "content") &&
                styles.invalid
              }
              value={formData.comment}
              onChange={handleInputChange}
            />
            {formErrors.find((error) => error.path === "content") && (
              <ErrorElement
                message={
                  formErrors.find((error) => error.path === "content").msg
                }
              />
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
            <button type="submit" onClick={handleSubmitClick}>
              Submit Comment
            </button>
          </div>
        </section>
      </form>
      <div>
        <h2 className={styles.commentsHeading}>Comments</h2>
        <Comments comments={comments} />
        {cursor?.status === "error" && (
          <p className={styles.commentsLoadErrorPara}>
            There was an error loading the comments. Please try again later.
          </p>
        )}
        {comments.length >= commentsCount && comments.length > 0 && (
          <p className={styles.commentEndPara}>End of comments.</p>
        )}
        {comments.length < commentsCount && comments.length > 0 && (
          <button
            type="button"
            onClick={handleCommentLoadClick}
            className={styles.loadButton}
          >
            Load more comments
          </button>
        )}
      </div>
    </div>
  );
};

export { Post };
