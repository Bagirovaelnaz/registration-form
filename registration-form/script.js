const username = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const userAddress = document.getElementById("addres");
const company = document.getElementById("company");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("succes");
};
const setSucces = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  inputControl.classList.add("succes");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase);
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const companyValue = company.value.trim();
  if (usernameValue === "") {
    setError(username, "Ad boş ola bilməz.");
  } else {
    setSucces(username);
  }

  if (surnameValue === "") {
    setError(surname, "Soyad boş ola bilməz.");
  } else {
    setSucces(surname);
  }

  if (emailValue === "") {
    setError(email, "Email boş ola bilməz.");
  } else if (isValidEmail(email) === false) {
    setError(email, "Keçərli email yazın.");
  } else {
    setSucces(email);
  }

  if (addressValue === "") {
    setError(userAddress, "Address boş ola bilməz.");
  } else {
    setSucces(userAddress);
  }

  if (companyValue === "") {
    setError(company, "Xana boş ola bilməz.");
  } else {
    setSucces(company);
  }
};

//* yazinin fontu kiciklesmedi, adressdeki kod oxunmur