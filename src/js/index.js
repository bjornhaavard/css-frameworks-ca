import { setRegisterFormListener } from "./handlers/register.js";
// import { API_SOCIAL_URL } from "./api/constants.js";

// console.log(API_SOCIAL_URL);

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/profile/register/":
      setRegisterFormListener();

      return;
  }
}

router();
