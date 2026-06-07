// 1. Logika filter tetap di sini (tidak masalah)
const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card-nexon");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter =
      button.dataset.filter || button.textContent.trim().toLowerCase();
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    gameCards.forEach((card) => {
      const platformText =
        card.dataset.platforms || card.textContent.toLowerCase();
      const platforms = platformText.split(/\s+/);
      let isPc = selectedFilter === "komputer" && platforms.includes("PC");
      const shouldShow =
        selectedFilter === "all" ||
        selectedFilter === "semua" ||
        isPc ||
        platforms.includes(selectedFilter) ||
        platformText.includes(selectedFilter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

// 2. Fungsi memuat header (Satu-satunya tempat untuk Event Listener menu)
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Inisialisasi ulang event listener setelah header muncul di DOM
    const menuToggle = document.getElementById("menuToggle");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    if (menuToggle && menuOverlay) {
      menuToggle.addEventListener("click", () => {
        menuOverlay.classList.add("active");
      });
    }

    if (closeMenu && menuOverlay) {
      closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
      });
    }
  })
  .catch((error) => console.error("Error loading header:", error));
