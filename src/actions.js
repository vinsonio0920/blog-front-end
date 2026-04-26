import { redirect } from "react-router-dom";

const signUpAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/sign-up`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    const result = await response.json();

    if (result.status === "success") {
      // automatically sign in user for convenience
      const signInUrl = `${import.meta.env.VITE_BLOG_API_WEBSITE}/sign-in`;

      const response = await fetch(signInUrl, {
        method: "POST",
        body: new URLSearchParams({
          email: formData.email,
          password: formData.password,
        }),
      });

      const signInResult = await response.json();

      if (signInResult.status === "success") {
        const token = signInResult.data.token;
        localStorage.setItem("jwtToken", token);

        return redirect("/");
      } else {
        // sign in failed, so users will have to do it manually
        return redirect("/sign-in");
      }
    } else {
      return result;
    }
  } catch (err) {
    console.error(err.messsage);
  }
};

const signInAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/sign-in`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    const result = await response.json();

    if (result.status === "success") {
      const token = result.data.token;
      localStorage.setItem("jwtToken", token);

      return redirect("/");
    } else {
      return result;
    }
  } catch (err) {
    console.error(err.message);
  }
};

const postAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const url = `${import.meta.env.VITE_BLOG_API_WEBSITE}/posts/${formData.postId}/comments`;

  try {
    const formattedPost = {
      name: formData.name,
      email: formData.email,
      content: formData.comment,
    };

    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formattedPost),
    });

    const result = await response.json();

    if (result.status === "success") {
      // reload page to the comments section
      redirect("");
    } else {
      return result;
    }
  } catch (err) {
    console.error(err.message);
  }
};

export { signUpAction, signInAction, postAction };
