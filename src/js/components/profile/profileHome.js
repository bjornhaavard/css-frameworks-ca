// import { getProfileData } from "../../api/posts/profile";

export function displayProfileData(profileData) {
  // Replace the placeholder image with the user's avatar
  const profileImage = document.getElementById("profile-img");
  profileImage.src = profileData.avatar;

  // Display the user's name
  const nameElement = document.getElementById("name");
  nameElement.textContent = profileData.name;

  // Display the user's email
  const emailElement = document.createElement("p");
  emailElement.textContent = `Email: ${profileData.email}`;
  const cardBody = document.querySelector(".card-body");
  cardBody.appendChild(emailElement);

  // Display the user's banner image if available
  if (profileData.banner) {
    const bannerImage = document.createElement("img");
    bannerImage.src = profileData.banner;
    bannerImage.classList.add("img-fluid");
    bannerImage.style.width = "100%";
    bannerImage.style.height = "auto";
    const cardHeader = document.querySelector(".rounded-top");
    cardHeader.insertBefore(bannerImage, cardHeader.firstChild);
  }
}
