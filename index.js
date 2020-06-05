let ticking = false;

// Cache elements
const header = document.getElementsByTagName("header")[0]; // We're interested in the first element

// Activation Margins
const HEADER_MARGIN = 65;
const SECTION_MARGIN = 300;

const scrollActions = () => {
  // 1. Sets whether the header is visible or not
  if (window.scrollY > HEADER_MARGIN) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(scrollActions);
    ticking = true;
  }
});
scrollActions();