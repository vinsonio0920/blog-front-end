const signInAction = async ({ request }) => {
  // instead of fetching
  const formData = Object.fromEntries(await request.formData());
  const url = "http://localhost:3000/sign-in";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    const result = await response.json();
    // TODO: Handle the result!

    // return result;

    // if error, re-render sign in form with error message
    // I'm thinking redirect users back to
  } catch (err) {
    console.error(err.message);
  }
};

export { signInAction };
