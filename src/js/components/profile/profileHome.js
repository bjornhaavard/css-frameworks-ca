import { defaultAvatarImage } from "../../api/constants.js";
import { getProfile } from "../../api/posts/profile.js";
import { getName } from "../../helpers/getName.js";
import { displayMessage } from "../shared/displayMessage.js";

export async function displayProfileData(profileData) {
  // Replace the placeholder image with the user's avatar

  const fetchedProfile = await getProfile();
  const loggedInUsername = getName(fetchedProfile);

  if (loggedInUsername) {
    try {
      profileData = fetchedProfile;

      const { name, avatar, email, banner } = profileData;

      const profileImage = document.getElementById("profile-img");

      profileImage.src = avatar || defaultAvatarImage;

      // Display the user's name
      const nameElement = document.getElementById("profile-name");
      nameElement.textContent = `Name: ${name}`;

      // Display the user's email
      const emailElement = document.getElementById("profile-email");
      emailElement.textContent = `Email: ${email}`;

      // Display the user's banner image if available
      if (banner) {
        const backgroundImageStyle = `
    background: url(${banner}) no-repeat center/cover;
    background-size: cover;`;

        const profileBanner = document.getElementById("profile-banner");
        profileBanner.style.cssText = backgroundImageStyle;
      }
    } catch (error) {
      displayMessage("#profile-container", "Something went wrong", "danger");
      return;
    }
  }
}
