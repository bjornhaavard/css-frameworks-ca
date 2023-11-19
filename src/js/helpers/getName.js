import * as storage from "../storage/index.js";

export function getName() {
  const profile = storage.load("profile");
  return profile?.name;
}
