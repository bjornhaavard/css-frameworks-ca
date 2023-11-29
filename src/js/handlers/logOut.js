import { remove } from "../storage";

export function logOut() {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", async (event) => {
    console.log(logoutButton);
    event.preventDefault();
    try {
      const result = await login(profile);
      console.log(result);
      const { accessToken, ...userProfile } = result;

      storage.remove("token", accessToken);
      storage.remove("profile", userProfile);

      location.href = "/";
    } catch (error) {
      displayMessage("#message", error.message, "warning");
    }
  });
}
