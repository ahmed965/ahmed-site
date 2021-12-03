(function (global) {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  const nvabarOffsetTop = navbar.offsetTop;
  const navbarHeight = navbar.offsetHeight;
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-links");
  const progressProcents = document.querySelectorAll(".progress-procent");
  const progressBars = document.querySelectorAll(".progress-bar");
  const arryProcent = [90, 85, 83, 83, 80, 60];
  const experiences = document.querySelectorAll(".experience");
 
  window.addEventListener("scroll", stickyHeader);
  window.addEventListener("scroll", activeSection);
  window.addEventListener("scroll", activeScrollbar);
  mobileMenu.addEventListener("click", toggleMenu);
  hideExpericence();
  window.addEventListener("scroll", showExperience);

  function stickyHeader() {
    if (window.scrollY >= nvabarOffsetTop + navbarHeight) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function activeSection() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("data-id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document.querySelector('#' + current).classList.add("active");
        });
      }
    });
  }

  function activeScrollbar() {
    progressBars.forEach((progressBar, i) => {
      if (progressBar.getBoundingClientRect().top >=0 && progressBar.getBoundingClientRect().top <= window.innerHeight) {
          progressProcents[i].style.width = arryProcent[i] + "%";
      } else {
        progressProcents[i].style.width = 0;
      }
    });
  }

  function toggleMenu() {
    mobileMenuContainer.classList.toggle("show");
  }

  function hideExpericence() {
    experiences.forEach((experience) => {
      experience.classList.add("hide");
    });
  }

  function showExperience() {
    experiences.forEach((experience) => {
      if (experience.getBoundingClientRect().top >=0 && experience.getBoundingClientRect().top <= window.innerHeight) {
          experience.classList.add("show");
      } else {
        experience.classList.remove("show");
      }
    });
  }
})(window);
