// backblock.js
window.addEventListener("DOMContentLoaded", function () {
  history.pushState(null, null, location.href);
  window.addEventListener("popstate", function () {
    location.href = "escape_this_page.html";
  });
});
