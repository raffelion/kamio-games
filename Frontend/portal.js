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

