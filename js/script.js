document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacts-form");
  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userMessage = document.getElementById("message");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("Name", userName.value);
    localStorage.setItem("Email", userEmail.value);
    localStorage.setItem("Messag", userMessage.value);

    popup.classList.add("show");

    form.reset();

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  });
});
