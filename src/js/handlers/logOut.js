/**
 * Logs the user out by removing stored authentication token and profile,
 * and redirects the user to the home page.
 *
 * @example
 * // Attach the logOut function to a logout button with the ID "logout-button"
 * logOut();
 */

import { displayMessage } from "../components/shared/displayMessage.js";
import * as storage from "../storage/index.js";

export function logOut() {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", async (event) => {
    console.log(logoutButton);
    event.preventDefault();

    storage.remove("token");
    storage.remove("profile");

    location.href = "/";
    displayMessage("#logout-message", "You are logged out", "success");
  });
}
