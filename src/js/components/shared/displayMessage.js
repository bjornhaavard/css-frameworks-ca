export function displayMessage(parent, message, alertType) {
  const container = document.querySelector(parent);

  container.innerHTML = `<div class="alert alert-${alertType}">${message}</div>`;
}
