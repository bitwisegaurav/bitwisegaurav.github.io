let sections = document.querySelectorAll(".main-link");
window.addEventListener("scroll", function () {
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

    let currentNavItems = document.querySelectorAll(
      '[href="#' + currentSection.id + '"]'
    );
    if (currentNavItems !== null) {
      currentNavItems.forEach(function(currentNavItem) {
        currentNavItem.classList.add("active");
      })
    }
  }
});