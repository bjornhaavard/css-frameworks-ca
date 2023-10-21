import { login } from "../api/auth/login.js";
import { displayMessage } from "../components/shared/displayMessage.js";
import * as storage from "../storage/index.js";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    try {
      const result = await login(profile);
      console.log(result);
      const { accessToken, ...userProfile } = result;

      storage.save("token", accessToken);
      storage.save("profile", userProfile);

      location.href = "/profile";
    } catch (error) {
      displayMessage("#message", error.message, "warning");
    }
  });
}
