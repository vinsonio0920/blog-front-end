import { jwtDecode } from "jwt-decode";

const homepageLoader = async () => {
  const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts`;

  try {
    const response = await fetch(url);
    // no !response.ok conditional because our posts API always return JSON!

    const result = await response.json();
    return { result };
  } catch (err) {
    console.err(err.message);
    return {
      status: "error",
    };
  }
};

const postLoader = async ({ params }) => {
  const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts/${params.postId}`;

  try {
    const response = await fetch(url);

    const result = await response.json();
    return { result };
  } catch (err) {
    console.error(err.message);
    return {
      result: {
        status: "error",
      },
    };
  }
};

export { homepageLoader, postLoader };
