const form = document.querySelector("#form");
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  const fileInput = document.querySelector("#files");
  const uploadImgElem = document.querySelector("#uploaded-img");
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);
  const response = fetch("http://localhost:8080/upload_files", {
    method: "POST",
    body: formData,
  })
    .then((res) => console.log((uploadImgElem.src = response.url)))
    .catch((err) => ("Error occured", err));
}
