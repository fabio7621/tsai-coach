document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollBtn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    console.error("scrollBtn element not found");
  }
});
