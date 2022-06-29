// Button click trigger alert
const handleClick = () => alert('Success');

// .card click toggle class
const cards = document.querySelectorAll('.card');

const toggleClass = (card) => {
  // deselect other card instances with .selected class (if any)
  const selected = document.querySelectorAll('.selected');
  selected.forEach((e) => e.classList.toggle('selected'));

  // add .selected class to currently selected card
  card.classList.toggle('selected');
};

cards.forEach((card) =>
  card.addEventListener('click', () => toggleClass(card))
);
