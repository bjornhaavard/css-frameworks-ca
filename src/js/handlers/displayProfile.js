import { displayProfileData } from "../components/profile/profileHome";

export async function displayProfile() {
  try {
    // const placeHolder = document.querySelector("#spinner");

    if (displayProfileData) {
      placeHolder.style.display = "none";
    }
    const profile = await api.getPosts();

    displayProfileData(profile, "#profile-container");
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
