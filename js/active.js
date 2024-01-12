window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let currentSection = null;

  // console.log(sections);

  sections.forEach(function (section) {
    let rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      currentSection = section;
    }
  });

  if (currentSection !== null) {
    let navItems = document.querySelectorAll(".active");
    navItems.forEach(function (navItem) {
      navItem.classList.remove("active");
    });

    let currentNavItem = document.querySelector(
      '[href="#' + currentSection.id + '"]'
    );
    if (currentNavItem !== null) {
      currentNavItem.classList.add("active");
    }
  }
});