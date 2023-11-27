import { remove } from "../storage";

export function logOut() {
  remove("token");
  window.location.href = "/";
}
