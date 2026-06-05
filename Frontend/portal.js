const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
const gameCards = document.querySelectorAll(".game-card-nexon[data-platforms]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    gameCards.forEach((card) => {
      const platforms = card.dataset.platforms.split(" ");
      const shouldShow =
        selectedFilter === "all" || platforms.includes(selectedFilter);

      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
