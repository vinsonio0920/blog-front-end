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
    return result;
    // TODO: Handle the result!

    // error will be handled on JSX
    // if success, then save token to localstorage and useNavigate to the homepage!
    // sanity check: make sure only one localstorage is set at a time!
  } catch (err) {
    console.error(err.message);
  }
};

export { signInAction };
