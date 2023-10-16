import { API_SOCIAL_URL } from "../constants";

const action = "/posts";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;
  const token = load("token");

  const response = await fetch(createPostURL, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bear ${token}`,
    },
    body: JSON.stringify(postData),
  });
}
