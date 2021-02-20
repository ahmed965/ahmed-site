(function (global) {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  const nvabarOffsetTop = navbar.offsetTop;
  const navbarHeight = navbar.offsetHeight;
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-links");
  const progressProcents = document.querySelectorAll(".progress-procent");
  const progressBars = document.querySelectorAll(".progress-bar");
  const arryProcent = [90, 85, 83, 83, 80, 60];
  const titleSectionOffsetTop = document.querySelector(".section-1 .title-section").offsetTop;
  const progressbarWrapper = document.querySelector(".progress-bar-wrapper");
  const progressbarWrapperFromTop = progressbarWrapper.offsetTop + progressbarWrapper.offsetHeight;
  const experiences = document.querySelectorAll(".experience");
  const expercienceFromTop = experience.offsetTop + experience.offsetHeight;

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
    sections.forEach((section, i) => {
      if (window.scrollY >= section.offsetTop - 10) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[i].classList.add("active");
      }
    });
  }

  function activeScrollbar() {
    progressBars.forEach((el, i) => {
      if (window.scrollY >= titleSectionOffsetTop && window.scrollY <= progressbarWrapperFromTop) {
        let scrollProcent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollProcent < 95) {
          progressProcents[i].style.width = arryProcent[i] + "%";
        }
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
      const experienceFromTopHalf = experience.offsetTop + experience.offsetHeight / 2;
      if (window.scrollY >= progressbarWrapperFromTop && window.scrollY <= experienceFromTopHalf) {
        let scrollProcent = (experience.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollProcent < 80) {
          experience.classList.add("show");
        }
      } else {
        experience.classList.remove("show");
      }
    });
  }
})(window);
