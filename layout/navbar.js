console.log("test");
document.addEventListener("DOMContentLoaded", function () {
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  var sidenav = document.getElementById("mySidenav");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  function openNav() {
    sidenav.classList.add("active");
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sidenav.classList.remove("active");
  }
});
