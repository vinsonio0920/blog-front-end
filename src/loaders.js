const homepageLoader = async () => {
  const url = `http://localhost:3000/posts/190`;

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

export { homepageLoader };
