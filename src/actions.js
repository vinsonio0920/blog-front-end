import { redirect } from "react-router";

const signUpAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const url = "http://localhost:3000/sign-up";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    const result = await response.json();

    if (result.status === "success") {
      // sign in user

      return redirect("/");
    } else {
      return result;
    }
  } catch (err) {
    console.error(err.messsage);
  }
};

const signInAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const url = "http://localhost:3000/sign-in";

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

export { signUpAction, signInAction };
