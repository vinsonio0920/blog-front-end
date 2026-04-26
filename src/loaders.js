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

const postListLoader = async ({ request }) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  const category = url.searchParams.get("category");

  try {
    let fetchUrl;
    let title;
    if (userId) {
      fetchUrl = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts?userId=${userId}`;
    } else if (category) {
      fetchUrl = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts?category=${category}`;
      title = category;
    } else {
      fetchUrl = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts`;
      title = "All posts";
    }

    const response = await fetch(fetchUrl);

    const result = await response.json();
    return { result, title };
  } catch (err) {
    console.error(err.message);
    return {
      result: {
        status: "error",
        errors: [
          {
            message:
              "There was an error fetching the category's posts. Please try again later.",
          },
        ],
      },
    };
  }
};

export { homepageLoader, postLoader, postListLoader };
