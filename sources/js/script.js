let cards = document.querySelectorAll(`.card`);
for (let card of cards) {
  card.addEventListener(`mouseover`, () => {
    card.style.scale = `1.1`;
    card.style.transition = `0.2s`;
    card.style.cursor = `pointer`;
  });
  card.addEventListener(`mouseout`, () => {
    card.style.scale = `1`;
  });
}
