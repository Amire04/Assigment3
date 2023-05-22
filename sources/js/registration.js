const BASE_URL = `https://dummyapi.io/data/v1/`;
const API_KEY = `646a0335fa59c8806117b2f6`;
async function makeQuery(endpoint, method = `GET`, payload = ``) {
  let options = {
    method,
    headers: {
      "app-id": API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...(method.toLowerCase() !== "get" && { body: JSON.stringify(payload) }),
  };
  const response = await fetch(BASE_URL + endpoint, options);
  return await response.json();
}
let firstName = document.querySelector(`#firstname`);
let lastName = document.querySelector(`#lastname`);
let emailInp = document.querySelector(`#email`);
let regBut = document.querySelector(`#regBut`);
let password = document.querySelector(`#password`);
let confirmPassword = document.querySelector(`#confirmPassword`);
regBut.addEventListener(`click`, async () => {
  let { data } = await makeQuery(`user?created=1`);
  for (let user of data) {
    if (firstName.value == user.firstName) {
      alert(`This person already exists`);
    } else if (password.value !== confirmPassword.value) {
      alert(`Incorrect passwords`);
      break;
    } else {
      makeQuery(`user/create`, `POST`, {
        firstName: firstName.value,
        lastName: lastName.value,
        email: emailInp.value,
      });
      console.log(user.firstName);
      location.href = `index.html`;
    }
  }
});
