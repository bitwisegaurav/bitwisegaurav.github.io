window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let currentSection = null;
  
    sections.forEach(function (section) {
      let rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= (window.innerHeight + 150)) {
        currentSection = section;
      }
    });
  
    if (currentSection !== null) {
      let navItems = document.querySelectorAll('.active');
      navItems.forEach(function (navItem) {
        navItem.classList.remove('active');
      });
  
      let currentNavItem = document.querySelector('[href="#' + currentSection.id + '"]');
      if (currentNavItem !== null) {
        currentNavItem.classList.add('active');
      }
    }
  });