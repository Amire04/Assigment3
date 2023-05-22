let arrBtn = document.querySelectorAll(`.cartBtn`);
for (let btn of arrBtn) {
  btn.addEventListener(`click`, () => {
    let btnId = btn.getAttribute(`id`);
    let imgId = document.querySelector(`#${btnId}Img`);
    let titleId = document.querySelector(`#${btnId}Title`);
    let cartArr = JSON.parse(localStorage.getItem(`cart`)) || [];
    let img = imgId.getAttribute(`src`);
    let title = titleId.innerHTML;
    let obj = {
      img,
      title,
      id: new Date().getTime(),
    };
    cartArr.push(obj);
    console.log(obj, cartArr);
    localStorage.setItem(`cart`, JSON.stringify(cartArr));
  });
}
