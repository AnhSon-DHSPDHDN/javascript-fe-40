const inputHeightElement = document.querySelector("#height");
const formHeightElement = document.querySelector(".form-input-height");
// console.log(inputHeightElement, "inputHeightElement");
// console.log(formHeightElement, "formHeightElement");

function submitFormHeight(event) {
  event.preventDefault();
  if (
    Number(inputHeightElement.value) > 10 ||
    Number(inputHeightElement.value) < 0
  ) {
    alert("Nhap lai di");
    inputHeightElement.value = "";
    return;
  }

  if (Number(inputHeightElement.value) >= 8.5) {
    alert("Gioi");
  } else if (Number(inputHeightElement.value) >= 7) {
    alert("Kha");
  } else {
    alert("Trung Binh");
  }

  inputHeightElement.value = "";
}

formHeightElement.addEventListener("submit", submitFormHeight);
