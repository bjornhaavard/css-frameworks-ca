import { displayProfileData } from "../components/profile/profileHome.js";

export async function displayProfile() {
  try {
    const placeHolder = document.querySelector("#spinner");

    if (displayProfileData()) {
      placeHolder.style.display = "none";
    }
    const profile = await api.getPosts();

    displayProfileData(profile);
    console.log(profile);
  } catch (error) {
    console.log(error);
  }
}
