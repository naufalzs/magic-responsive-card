function increaseWidth() {
  const root = document.querySelector(":root");
  const cardWidth = parseInt(getComputedStyle(root).getPropertyValue("--card-width").slice().replace("px", ""));
  root.style.setProperty("--card-width", cardWidth + 30 + 'px')
}

function decreaseWidth() {
  const root = document.querySelector(":root");
  const cardWidth = parseInt(getComputedStyle(root).getPropertyValue("--card-width").slice().replace("px", ""));
  root.style.setProperty("--card-width", cardWidth - 30 + 'px')
}
