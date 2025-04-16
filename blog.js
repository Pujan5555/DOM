document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "index.html";
});
const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      toggles.forEach((other) => {
        if (other !== toggle) other.checked = false;
      });
    }
  });
});
