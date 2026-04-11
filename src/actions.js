import { redirect } from "react-router";

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

export { signInAction };
