export function getArrows() {
  const nextArrow =
    '<button class="br-button circle small" type="button"><i class="fas fa-chevron-right"></i></button>';
  const prevArrow =
    '<button class="br-button circle small" type="button"><i class="fas fas fa-chevron-left"></i></button>';

  return { nextArrow, prevArrow };
}

export function setAttributes() {
  document.querySelectorAll(".flatpickr-day").forEach(element => {
    element.setAttribute("tabindex", "1");
  });
  document.querySelectorAll(".arrowUp").forEach(element => {
    element.classList.add("fas", "fa-chevron-up");
  });
  document.querySelectorAll(".arrowDown").forEach(element => {
    element.classList.add("fas", "fa-chevron-down");
  });
}
