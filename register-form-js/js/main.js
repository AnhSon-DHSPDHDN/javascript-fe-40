const elementInputEmail = document.querySelector('[name="email"]');
const elementFormRegister = document.querySelector(".form-register");
const eleResultForm = document.querySelector(".result-form");
const eleInputCheckedTerm = document.querySelector('[name="term-of-service"]');
const eleErrorCheckedTerm = document.querySelector(".please-checked-term");

function handleSubmitRegister(event) {
  event.preventDefault(); // Chặn sự kiện reload trang
  console.log("handleSubmitRegister run");

  if (!eleInputCheckedTerm.checked) {
    eleErrorCheckedTerm.textContent = "Please checked term";
    return;
  }

  eleErrorCheckedTerm.textContent = "";
  const eleInputContactChecked = document.querySelector(
    '[name="contact"]:checked'
  );

  const email = elementInputEmail.value;

  eleResultForm.innerHTML = `
    <h3>Email: ${email}</h3>
    <h3>Mobile Phone: ... </h3>
    <h3>Country: ... </h3>
    <h3>Contact by me: ${eleInputContactChecked?.value || ""} </h3>
  `;
}

elementFormRegister.addEventListener("submit", handleSubmitRegister);
