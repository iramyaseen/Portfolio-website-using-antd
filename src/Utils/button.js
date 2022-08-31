const allSectionNames = ["#profile-btns", "#portfolio-links-container"];
const setActiveButton = (section) => {
  const allSectionButtons = section.querySelectorAll(".btn");
  allSectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentActiveButton = section.querySelector(".active");
      currentActiveButton && currentActiveButton.classList.remove("active");
      button.classList.add("active");
    });
  });
};
export const changeActiveButton = () => {
  const allSections = allSectionNames.map((el) => document.querySelector(el));
  allSections.forEach((section) => setActiveButton(section));
};
