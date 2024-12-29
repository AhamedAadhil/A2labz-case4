document.addEventListener("DOMContentLoaded", function () {
  // Get all navbar links
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Add click event listener to each link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Remove 'active' class from all links
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });
});
